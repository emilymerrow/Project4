import { useState } from "react"
import { Button, Form, Segment } from "semantic-ui-react";

export default function AddChoreForm({ handleAddChore }) {
    const [choreName, setChoreName] = useState("");
    const [choreValue, setChoreValue] = useState("");
    const [choreDescription, setChoreDescription] = useState("");

    function handleChoreNameChange(e) {
        setChoreName(e.target.value);
    }
    function handleChoreValueChange(e) {
        setChoreName(e.target.value);
    }
    function handleChoreDescriptionChange(e) {
        setChoreDescription(e.target.value);
    }
    

    function handleSubmit(e) {
        e.preventDefault();

        //Prepare the formData for submission
        const formData = {
            name: choreName,
            money: parseFloat(choreValue),
        };

        handleAddChore(formData); //handleAddChore comes from the ChorePage component
        //reset the form data
        setChoreName("");
        setChoreValue("");
        setChoreDescription("");
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    placeholder="Chore Name"
                    required
                    name="choreName"
                    value={choreName}
                    onChange={handleChoreNameChange}
                />
                <Form.Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Chore Value"
                    required
                    name={choreValue}
                    value={choreValue}
                    onChange={handleChoreValueChange}
                />
                <Form.TextArea
                    placeholder="Chore Description"
                    required
                    name="choreDescription"
                    value={choreDescription}
                    onChange={handleChoreDescriptionChange}
                />
                <Button type="submit">Add Chore</Button>
            </Form>
        </Segment>
    );
}