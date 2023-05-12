import React, { useEffect, useState } from "react";
import { Grid, Card, Dimmer, Segment, Image, Button } from "semantic-ui-react";
import Loader from "../Loader/Loader";
import UpdateChore from "./UpdateChore";
import DeleteChore from "./DeleteChore";
import "./ChoreDisplay.css"; 
import ButtonExampleAnimated from "./ButtonExampleAnimated";


export default function ChoreDisplay({
  chores,
  loading,
  completeChore,
  loggedUser,
  handleUpdateChore,
  handleDelete,
  handleTotalSavingsChange,
  handleChildNameChange
}) {
  const [editingChoreId, setEditingChoreId] = useState(null);

  function renderChores() {
    return (
      <Grid centered columns={3} doubling>
        {chores.map((chore) => {
         
          return (
            <Grid.Column key={chore._id} className="custom-card-width">
              <Card>
                <Card.Content>
                  <Card.Meta>Assigned to: {chore.childName}</Card.Meta>
                  <Card.Header>{chore.title}</Card.Header>
                  {/* Add difficulty level to Card.Meta */}
                  <Card.Meta>
                    ${chore.amount.toFixed(2)} | Difficulty: {chore.difficulty ? chore.difficulty : 'N/A'}
                  </Card.Meta>
                  <Card.Description>{chore.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {editingChoreId === chore._id ? (
                    <UpdateChore
                      chore={chore}
                      onUpdate={(choreId, updatedChore) => {
                        handleUpdateChore(choreId, updatedChore);
                        setEditingChoreId(null);
                      }}
                    />
                  ) : (
                    <>
                      <ButtonExampleAnimated
                          choreAmount={chore.amount}
                          isCompleted={chore.isCompleted}
                          onClick={() => {
                          completeChore(chore._id, !chore.isCompleted);
                      }}
                      />

                      <Button onClick={() => setEditingChoreId(chore._id)}>Edit</Button>
                    </>
                  )}
                  <DeleteChore handleDelete={handleDelete} choreId={chore._id} />
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }

  if (loading) {
    return (
      <>
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading...</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        {renderChores()}
      </>
    );
  }

  return <>{renderChores()}</>;
}
