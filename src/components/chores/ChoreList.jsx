import React, { useState, useEffect } from "react";
import ChoreForm from "./ChoreForm";
import { getAll, createChore } from "../../utils/choresService";


export default function ChoreList() {
    const [chores, setChores] = useState([]); //State to hold the list of chores
    const [choreToEdit, setChoreToEdit] = useState(null); // State to hold the chore being edited

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

    //Render the ChoreForm and the list of chores 
    return (
        <div>
            <ChoreForm onSubmit={handleCreateOrUpdate} choreToEdit={choreToEdit} />
            <ul>
                {chores.map((chore) => (
                    <li key={chore._id}>
                        {chore.title} - {chore.description} - {chore.rewardAmount}
            <button onClick={() => setChoreToEdit(chore)}>Edit</button>
            <button onClick={() => handleDelete(chore._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 
