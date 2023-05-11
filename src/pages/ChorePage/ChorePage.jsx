import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddChoreForm from "../../components/chores/AddChoreForm";
import ChoreDisplay from "../../components/chores/ChoreDisplay";
import Loader from "../../components/Loader/Loader";
import { Grid, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom" ;

// Import API utilities for chores and users from choresService

import * as choresService from "../../utils/choresService";
import tokenService from "../../utils/tokenService";


export default function ChorePage({ loggedUser, handleLogout }) {
    const [chores, setChores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const history = useHistory();
    const isParent = loggedUser.type === "parent";
    

    useEffect(() => {
        async function fetchData() {
            const chores = await choresService.getAll();
            setChores(chores);
        }
        fetchData();
    }, []);

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
  // Add a state for total savings
    const [totalSavings, setTotalSavings] = useState(0);

 // Add handleTotalSavingsChange function here
 function handleTotalSavingsChange(choreAmount, isCompleted) {
   
      setTotalSavings((previousState) => previousState + choreAmount);
  }


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


async function getChores() {
    try {
        setLoading(true);
        setTotalSavings(0)
        const response = await choresService.getAll();
        console.log(response, "data");
        setChores(response.chores);
        const completedChores = response.chores.filter(chore => chore.isCompleted)
        console.log(completedChores);
        completedChores.forEach(chore => {
            handleTotalSavingsChange(chore.amount)
        })
        setLoading(false);
    } catch (err) {
        console.log(err.message, "this is the error in getChores");
        setLoading(false);
    }
}


// function to mark a chore as complete

async function completeChore(choreId, isCompleted) {
    try {
         // Call the completeChore function from the choresService with the provided choreId
         // This sends a request to the server to mark the chore as completed
      await choresService.completeChore(choreId, isCompleted); //pass the isCompleted statut to the API call

      getChores();
   
    } catch (err) {
      console.log(err);
    }
  }


// useEffect(() => {
//     getChores();
// }, []);

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
        {loggedUser.role === "parent" && (
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddChoreForm handleAddChore={handleAddChore} />
                </Grid.Column>
            </Grid.Row>
        )}
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}> 
                <Segment>
                    <h1>Total Savings : {totalSavings}</h1>
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <ChoreDisplay
                    chores={chores}
                    loading={loading}
                    completeChore={completeChore}
                    loggedUser={loggedUser}
                    handleUpdateChore={loggedUser.role === "parent" ? handleUpdateChore : null}
                    handleDelete={loggedUser.role === "parent" ? handleDelete : null}
                    showEditAndDelete={loggedUser.role === "parent" ? true : false}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);
}
