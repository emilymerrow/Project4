import { useState } from "react";
import { Button, Form, Segment, Header, Dropdown } from "semantic-ui-react";

export default function AddChoreForm({ handleAddChore }) {
  const [choreName, setChoreName] = useState("");
  const [choreValue, setChoreValue] = useState("");
  const [choreDescription, setChoreDescription] = useState("");
  const [childName, setChildName] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [assignedSchedule, setAssignedSchedule] = useState("once");

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
  }

  function handleChildNameChange(e) {
    setChildName(e.target.value);
  }

  function handleChoreNameChange(e) {
    setChoreName(e.target.value);
  }

  function handleChoreValueChange(e) {
    setChoreValue(e.target.value);
  }

  function handleChoreDescriptionChange(e) {
    setChoreDescription(e.target.value);
  }

  function handleAssignedScheduleChange(e, { value }) {
    setAssignedSchedule(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title: choreName,
      amount: choreValue,
      description: choreDescription,
      childName: childName,
      assignedSchedule: assignedSchedule,
    };

    handleAddChore(formData);
    setChoreName("");
    setChoreValue("");
    setChoreDescription("");
    setChildName("");
  }

  const scheduleOptions = [
    { key: "once", text: "Once", value: "once" },
    { key: "daily", text: "Daily", value: "daily" },
    { key: "weekly", text: "Weekly", value: "weekly" },
    { key: "monthly", text: "Monthly", value: "monthly" },
  ];

  return (
    <Segment inverted color="teal">
      <Header as="h2" textAlign="center" inverted>
        Enter a New Chore
      </Header>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Assigned to: "
            placeholder="Child Name"
            required
            name="childName"
            value={childName}
            onChange={handleChildNameChange}
          />
          <Form.Input
            fluid
            label="Chore Name"
            placeholder="Chore Name"
            required
            name="choreName"
            value={choreName}
            onChange={handleChoreNameChange}
          />
          <Form.Input
            fluid
            type="number"
            min="0"
            step="1"
            label="Chore Value"
            placeholder="Chore Value"
            required
            name="choreValue"
            value={choreValue}
            onChange={handleChoreValueChange}
          />
        </Form.Group>
        <Form.TextArea
          label="Chore Description"
          placeholder="Chore Description"
          required
          name="choreDescription"
          value={choreDescription}
          onChange={handleChoreDescriptionChange}
        />
        <Form.Field>
          <label>Assigned Schedule</label>
          <Dropdown
            selection
            options={scheduleOptions}
            value={assignedSchedule}
            onChange={handleAssignedScheduleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Difficulty Level</label>
          <input
            type="range"
            min="1"
            max="10"
            value={difficulty}
            onChange={handleDifficultyChange}
            />
            </Form.Field>
            <Button type="submit">Add Chore</Button>
            </Form>
            </Segment>
            );
            }
