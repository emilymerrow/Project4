import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddChoreForm from "../../components/chores/AddChoreForm";
import ChoreDisplay from "../../components/chores/ChoreDisplay";
import Loader from "../../components/Loader/Loader";



import { Grid, Segment } from "semantic-ui-react";

// Import API utilities for chores and users from choresService

import * as choresService from "../../utils/choresService";
import tokenService from "../../utils/tokenService";


export default function ChorePage({ loggedUser, handleLogout }) {
    const [chores, setChores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    

    //we will call this function in our AddChoreForm handleSubmit,
    //this way,  when we get a response from the server we can update our state
    //in short this function is responsible for adding a new chore to the list
    //by communicating with the server and handling the response or errors
    async function handleAddChore(chore) {    
        try {
            setLoading(true);
            // it tries to create a new chore by calling our create  function i the choresService utils folder
            const responseData = await choresService.createChore(chore); //Make the API call
            console.log(responseData, "response from the server");
            //if successful, it logs the server's response,
            //adds the new chore to the existing list
            setChores([responseData.data, ...chores]);//update the state
            //sets loading back to false
            setLoading(false);
        } catch (err) { 
            setLoading(false);
            console.log(err, "error in handleAddChore");
            setError("Error creating a chore, please try again");
            //from here we pass it down to the addChores Form 
        }
    }
  // Add a state for total savings
  const [totalSavings, setTotalSavings] = useState(0);

 
 function handleTotalSavingsChange(choreAmount, isCompleted) {
   
      setTotalSavings((previousState) => previousState + choreAmount);

  }


async function handleUpdateChore(choreId, updatedData) {
    try {
        setLoading(true);
        const updatedChore = await choresService.updateChore(choreId, updatedData ); // make the API call
        setChores(chores.map((chore) => (chore._id === choreId ? updatedChore : chore))); //update the state
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
        await choresService.deleteChore(choreId); //Make the API call
        setChores(chores.filter((chore) => chore._id !== choreId)); //update the state
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
        const response = await choresService.getAll(); //make an API call
        console.log(response, "data");
        setChores(response.chores); // update the state
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
    <>
      <Header loggedUser={loggedUser} handleLogout={handleLogout} />
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
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
              handleUpdateChore={handleUpdateChore}
              handleDelete={handleDelete}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddChoreForm handleAddChore={handleAddChore} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
  
}  