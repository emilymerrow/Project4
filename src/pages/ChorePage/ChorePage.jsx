import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddChoreForm from "../../components/chores/AddChoreForm";
import ChoreDisplay from "../../components/chores/ChoreDisplay";
import Loader from "../../components/Loader/Loader";



import { Grid } from "semantic-ui-react";

// Import API utilities for chores and users from choresService

import * as choresService from "../../utils/choresService";
import tokenService from "../../utils/tokenService";

export default function ChorePage({ loggedUser, handleLogout }) {
    const [chores, setChores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

// Add your functions to handle chores (CRUD operations) here

async function handleUpdateChore(choreId, updatedData) {
    try {
        setLoading(true);
        const updatedChore = await choresService.updateChore(choreId, updatedData );
        setChores(chores.map((chore) => (chore._id === choreId ? updatedChore : chore)));
        setLoading(false);
    } catch (err) {
        setLoading(false);
        console.log(err, "this error is in handleUpdateChore");
        setError("Error updating a chore, please try again harder");
    }
}
async function handleDelete(choreId) {
    try {
        setLoading(true);
        await choresService.deleteChore(choreId);
        setChores(chores.filter((chore) => chore._id !== choreId));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err, "error in handleDeleteChore");
        setError("Error deleting a chore, please try again");
      }
    }

async function handleAddChore(chore) {
    try {
        setLoading(true);
        const responseData = await choresService.createChore(chore);
        console.log(responseData, "response from the server");
        setChores([responseData.data, ...chores]);
        setLoading(false);
    } catch (err) {
        setLoading(false);
        console.log(err, "error in handleAddChore");
        setError("Error creating a chore, please try again");
    }
}
async function getChores() {
    try {
        setLoading(true);
        const response = await choresService.getAll();
        console.log(response, "data");
        setChores(response.chores);
        setLoading(false);
    } catch (err) {
        console.log(err.message, "this is the error in getChores");
        setLoading(false);
    }
}
// function to mark a chore as complete

async function completeChore(choreId) {
    try {
        // send a POST request to the `/api/chores/:choreId/complete` endpoint
        // pass the logges user's Id in the request body
        const response = await fetch(`/api/chores/${choreId}/complete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include the authorization header to ensure only 
                //authenticated users can mark chores as complete
                'Authorization': 'Bearer' + tokenService.getToken(),
            },
        body: JSON.stringify({ userId: loggedUser,_id }),
        });
    // If the request is successful, refresh the chore list
    if (response.ok) {
        getChores()
    } else {
        // If the request fails, log an error message
        console.log('Error: Failed to mark chore as complete');
    }
    } catch (err) {
        //Log any error that occurs during the request
        console.log(err, "error in completeChore");
    }

useEffect(() => {
    getChores();
}, []);

if (error) {
    return (
        <>
        <Header loggedUser={loggedUser} handleLogout={handleLogout} />
        </>

    );
}
return (
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <Header loggedUser={ loggedUser } handleLogout={handleLogout} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <AddChoreForm handleAddChore={handleAddChore} />
            </Grid.Column>
        </Grid.Row>
    
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <ChoreDisplay
                    chores={chores}
                    loading={loading}
                    completeChore={completeChore}
                    loggedUser={loggedUser}
                    handleUpdateChore={handleUpdateChore} // pass the handleUpdateChore function as a prop
                    handleDelete={handleDelete}
                />

            </Grid.Column>
        </Grid.Row>
    </Grid>
);
}}