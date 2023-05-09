import React, { useState } from "react";
import { Card, Dimmer, Segment, Image, Button } from "semantic-ui-react";
import Loader from "../Loader/Loader";
import UpdateChore from "./UpdateChore";
import DeleteChore from "./DeleteChore";


export default function ChoreDisplay({
  chores,
  loading,
  markChoresAsComplete,
  loggedUser,
  handleUpdateChore,
  handleDelete,
}) {
  console.log(chores);
  if (!Array.isArray(chores)) {
    return <p>Error: Chores data is not an array.</p>;
  }

  // Add the editingChoreId state variable
  const [editingChoreId, setEditingChoreId] = useState(null);

  if (loading) {
    return (
      <>
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading...</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        <Card.Group stackable>{renderChores()}</Card.Group>
      </>
    );
  }

  function renderChores() {
    return chores.map((chore) => {
      return (
        <Card key={chore._id}>
          <Card.Content>
            <Card.Header>{chore.title}</Card.Header>
            <Card.Meta>${chore.amount?.toFixed(2)}</Card.Meta>
            <Card.Description>{chore.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {editingChoreId === chore._id ? (
              <UpdateChore
                chore={chore}
                onUpdate={(choreId, updatedChore) => {
                  handleUpdateChore(choreId, updatedChore);
                  setEditingChoreId(null); // Reset the editingChoreId state after updating the chore
                }}
              />
            ) : (
              <>
                <Button
                  basic
                  color="green"
                  onClick={() => markChoresAsComplete(chore._id)}
                >
                  Mark as Complete
                </Button>
                <Button onClick={() => setEditingChoreId(chore._id)}>Edit</Button>
              </>
            )}
            <DeleteChore
              handleDelete={handleDelete}
              choreId={chore._id}
            />
          </Card.Content>
        </Card>
      );
    });
  }
  

  return <Card.Group stackable>{renderChores()}</Card.Group>;
}
