import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddChoreForm from "../../components/chores/AddChoreForm";
import ChoreDisplay from "../../components/chores/ChoreDisplay";
import Loader from "../../components/Loader/Loader";
import "./ChorePage.css";

import { Grid, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

// Import API utilities for chores and users from choresService

import * as choresService from "../../utils/choresService";
import tokenService from "../../utils/tokenService";


export default function ChorePage({ loggedUser, handleLogout }) {
    const [chores, setChores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // Add a state for total savings
    const [totalSavings, setTotalSavings] = useState(0);
    const navigate = useNavigate();
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
    <Grid centered style={{ marginTop: '1rem' }}
    >
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4} className="square">
          <Segment textAlign="center" className="square-segment" style={{ padding: '0.5em', border: '2px solid black', borderRadius: '5px' }}>
            <h2 style={{ borderBottom: '2px solid black', paddingBottom: '0.5em', marginBottom: '0.5em' }}>Total Payout</h2>
            <button
              style={{
                width: '50%',
                height: '25%',
                fontSize: '1rem',
                borderRadius: '5px',
                backgroundColor: '#4E73DF',
                color: 'white',
              }}
            >
              ${totalSavings}
            </button>
          </Segment>
        </Grid.Column>
        {/* Create a grid column with custom className for deductions */}
        <Grid.Column mobile={16} tablet={8} computer={4} className="square">
          <Segment textAlign="center" className="square-segment" style={{ padding: '0.5em', border: '2px solid black', borderRadius: '5px' }}>
            <h2 style={{ borderBottom: '2px solid black', paddingBottom: '0.5em', marginBottom: '0.5em' }}>Deductions</h2>
            <button
              style={{
                width: '50%',
                height: '25%',
                fontSize: '1rem',
                borderRadius: '5px',
                backgroundColor: '#4E73DF',
                color: 'white',
              }}
              onClick={() => {
                // Redirect to the Deductions component when clicked
                navigate('/deductions');
              }}
            >
              Deductions
            </button>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
        style={{
          maxWidth: 1600
        }}>
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
      <Grid.Row centered>
        <Grid.Column width={14} style={{ padding: "0 1rem" }}>
          <Segment>
            <AddChoreForm handleAddChore={handleAddChore} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);
            }
