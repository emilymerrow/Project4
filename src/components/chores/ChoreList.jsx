import React, { useState, useEffect } from "react";
import ChoreForm from "./ChoreForm";
import { getAll, createChore, updateChore, deleteChore, completeChore } from "../../utils/choresService";


export default function ChoreList() {
    const [chores, setChores] = useState([]); //State to hold the list of chores
    const [choreToEdit, setChoreToEdit] = useState(null); // State to hold the chore being edited
    const [totalAmount, setTotalAmount] = useState(0);
    console.log(chores); //for debugging purpose only :( 

// Fetch chores when the component mounts
    useEffect(() => {
        fetchChores();
    }, []);

    // Fetch chores from the API and update the state
    async function fetchChores() {
        const fetchedChores = await getAll();
        setChores(fetchedChores);
    }

    //Handle creating or updating a chore
    const handleCreateOrUpdate = async (choreData) => {
        if (choreToEdit) {
            await updateChore(choreToEdit._id, choreData)
            setChoreToEdit(null);
        } else {
            await createChore(choreData);
        }
        fetchChores();
    };

    // Handle deleting a chore
    const handleDelete = async (choreId) => {
        await deleteChore(choreId);
        fetchChores();
    };

    // takes the choreId and isCompleted status as arguments, calls the completeChore function 
    // from the choresService, and then refreshes the list of chores.
    //first find the chore with the given choreId and then extract its rewardAmount.
    //Based on the new isCompleted status, we either add or subtract the rewardAmount from the totalAmount.
    const handleCompleteChore = async (choreId, isCompleted) => {
        await completeChore(choreId, isCompleted);
        fetchChores();
      

        const chore = chores.find((chore) => chore._id === choreId);
        const choreAmount = chore.rewardAmount;

        if (isCompleted) {
            setTotalAmount(totalAmount + choreAmount);
        } else {
            setTotalAmount(totalAmount - choreAmount);
        }
    };
      

    //Render the ChoreForm and the list of chores 
    return (
        <div>
            <h2>Total Savings: ${totalAmount}</h2>
            <ChoreForm onSubmit={handleCreateOrUpdate} choreToEdit={choreToEdit} />
            <ul>
                {chores.map((chore) => (
                    <li key={chore._id}>
                        {chore.title} - {chore.description} - {chore.rewardAmount}
            <button onClick={() => setChoreToEdit(chore)}>Edit</button>
            <button onClick={() => handleDelete(chore._id)}>Delete</button>
            <button onClick={() => handleCompleteChore(chore._id, !chore.isCompleted)}
            >
                {chore.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 
