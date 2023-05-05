import React, { useState } from "react";

//The ChoreForm component takes onSubmit and choreToEdit as props
export default function ChoreForm({ onSubmit, choreToEdit }) {
    // Initioalize the state with choreToEdit or an empty object if choreToEdit is not provided
   const [ choreData, setChoreData ] = useState(
    choreToEdit || { title: "", description: "", isCompleted: false, rewardAmount: "" }
  );

  //Handle changes to input fields
  const handleChange = (event) => {
    setChoreData({ ...choreData, [event.target.name]: event.target.value});
  };

  //Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(choreData);
  };

  //Render the form with input fields and a submit button
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="title"
            placeholder="Chore Name"
            value={choreData.title}
            onChange={handleChange}
        />
        <input 
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
        />
        <input
            type="checkbox"
            name="isCompleted"
            checked={choreData.isCompleted}
            onChange={(e) => setChoreData({ ...choreData, isCompleted: e.target.checked})}
        />
        <input 
            type="number"
            name="rewardAmount"
            placeholder="Reward Amount"
            value={choreData.rewardAmount}
            onChange={handleChange}
        />
        <button type="submit">{choreToEdit ? "Update" : "Add"} Chore</button>
    </form>
  );

}