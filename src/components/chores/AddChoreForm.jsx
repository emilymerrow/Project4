import { useState } from "react";
import { Button, Form, Segment, Header, Dropdown, Select } from "semantic-ui-react";

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

  function handleChoreValueChange(e, { value }) {
    setChoreValue(value);
  }

  function handleChoreDescriptionChange(e) {
    setChoreDescription(e.target.value);
  }

  function handleAssignedScheduleChange(e, { value }) {
    setAssignedSchedule(value);
  }
  // function handleChoreValueDropdownChange(e, { value }) {
  //   setChoreValue(value);
  // }
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

  const options=[
    { key: 1, text: "$1", value: 1 },
    { key: 2, text: "$3", value: 3 },
    { key: 3, text: "$5", value: 5 },
    { key: 4, text: "$10", value: 10 },
    { key: 5, text: "$15", value: 15 },
    { key: 6, text: "$20", value: 20 },
  ]

  return (
    <Segment inverted color="teal">
      <Header as="h2" textAlign="center" inverted>
        Enter a New Chore
      </Header>
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label={{
              children: 'Assigned to:',
              style: {
                fontSize: '1em',
                fontFamily: 'Roboto, sans-serif',
                color: 'black',
              },
            }}
            placeholder="Child Name"
            required
            name="childName"
            value={childName}
            onChange={handleChildNameChange}
          />
          <Form.Input
            fluid
            label={{
              children: 'Chore Name',
              style: {
                fontSize: '1em',
                fontFamily: 'Roboto, sans-serif',
                color: 'black',
              },
            }}
            placeholder="Chore Name"
            required
            name="choreName"
            value={choreName}
            onChange={handleChoreNameChange}
          />
          
  <label
    style={{
      fontSize: "1em",
      fontFamily: "Roboto, sans-serif",
      color: "black",
    }}
  >
    Chore Value
  </label>
  <Form.Field control={Select}
            
            options={options}
            placeholder='Value'
            onChange={handleChoreValueChange}/>
  

        </Form.Group>
        <Form.TextArea
          label={{
            children: 'Chore Description',
            style: {
              fontSize: '1em',
              fontFamily: 'Roboto, sans-serif',
              color: 'black',
            },
          }}
          placeholder="Chore Description"
          required
          name="choreDescription"
          value={choreDescription}
          onChange={handleChoreDescriptionChange}
        />
          <label
            style={{
              fontSize: '1em',
              fontFamily: 'Roboto, sans-serif',
              color: 'black',
            }}
          >
            Assigned Schedule
          </label>
        <Form.Field control={Select}
            
            options={scheduleOptions}
            placeholder='Assigned Schedule'
            onChange={handleAssignedScheduleChange}/>
          
            
          
        
        <Form.Field>
          <label
            style={{
              fontSize: '1em',
              fontFamily: 'Roboto, sans-serif',
              color: 'black',
            }}
          >
            Difficulty Level
          </label>
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