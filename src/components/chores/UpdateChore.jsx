import React, {useState} from "react";
import { Button, Form } from "semantic-ui-react";

function UpdateChore({ chore, onUpdate }) {
    // initialize state variables with the current chore data

    const [title, setTitle] = useState(chore.title);
    const [description, setDescription] = useState(chore.description);
    const [amount, setAmount] = useState(chore.amount);

    // function to handle the form submission

    const handleSubmit = (event) => {
        event.preventDefault(); // stopping the browser from doing its default action (sending 
                                //data to the server and refreshing the page) when the form is submitted

    // Call the onUpdate function passed as a prop with the updated data

    onUpdate(chore._id, { title, description, amount });

    };

    // render the form with input fields pre-filled with the current chore data
return (
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Title</label>
            <input 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

        {/* // Update the title state variable when the input changes
        onChange={(e) => setTitle(e.target.value)}
         */}
        </Form.Field>
        <Form.Field>
            <label>Description</label>
            <textarea
                placeholder="Description"
                value={description}
            //Update the description state variable when the input changes
                onChange={(e) => setDescription(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Amount</label>
            <input 
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
            //Update the amount state variable when the input changes
            // Convert the input value to a float before updating the state
            />
        </Form.Field>
        <Button type="submit">Update Chore</Button>
        </Form>
    );

}

export default UpdateChore;