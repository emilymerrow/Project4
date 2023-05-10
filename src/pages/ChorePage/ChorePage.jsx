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

 // Add handleTotalSavingsChange function here
 function handleTotalSavingsChange(choreAmount, isCompleted) {
   
      setTotalSavings((previousState) => previousState + choreAmount);

   
  
  }


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

// async function handleAddChore(chore) {
//     try {
//         setLoading(true);
//         const responseData = await choresService.createChore(chore);
//         console.log(responseData, "response from the server");
//         setChores([responseData.data, ...chores]);
//         setLoading(false);
//     } catch (err) {
//         setLoading(false);
//         console.log(err, "error in handleAddChore");
//         setError("Error creating a chore, please try again");
//     }
// }
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


// function to mark a chore as complete

async function completeChore(choreId, isCompleted) {
    try {
         // Call the completeChore function from the choresService with the provided choreId
         // This sends a request to the server to mark the chore as completed
      await choresService.completeChore(choreId, isCompleted); //pass the isCompleted statut to the API call

      // Update the state of the chores in the component
    // For each chore in the chores array, check if its ID matches the provided choreId
    // If it does, create a new object with the same properties as the chore, but set isCompleted to true
    // If it doesn't match, return the original chore object unchanged
    //   setChores(
    //     chores.map((chore) =>
    //       chore._id === choreId ? { ...chore, isCompleted: isCompleted } : chore
    //     )
    //   );
    //     // Find the updatedChore using choreId
    //   const updatedChore = chores.find((chore) => chore._id === choreId);

      // Call handleTotalSavingsChange with the chore amount and completion status
    //   handleTotalSavingsChange(updatedChore.amount, isCompleted);
    
      getChores();
      //update the total savings
    //   const updatedChore = chores.find((chore) => chore._id === choreId);
    //   if (isCompleted) {
    //     setTotalSavings(totalSavings + updatedChore.amount);
    //   } else {
    //     setTotalSavings(totalSavings - updatedChore.amount);
    //   }
    } catch (err) {
      console.log(err);
    }
  }
//   function handleTotalSavingsChange(choreAmount, isCompleted) {
//     if (isCompleted) {
//       setTotalSavings(totalSavings + choreAmount);
//     } else {
//       setTotalSavings(totalSavings - choreAmount);
//     }
//   }

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
                    handleUpdateChore={handleUpdateChore} // pass the handleUpdateChore function as a prop
                    handleDelete={handleDelete}
                />

            </Grid.Column>
        </Grid.Row>
    </Grid>
);
}