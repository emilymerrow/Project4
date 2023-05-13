import React, { useState } from "react";
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
  handleChildNameChange,
  handleAssignedScheduleChange,

}) {
  const [editingChoreId, setEditingChoreId] = useState(null);

  function renderChores() {
    return (
      <Grid centered columns={4} doubling>
        {chores.map((chore) => {
          return (
            <Grid.Column key={chore._id} className="custom-card-width">
              <Card
                style={{
                  backgroundImage: `url(https://i.imgur.com/iTpr2Bh.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                <Card.Content>
                <Card.Header style={{
                  textAlign: 'center',
                  fontFamily: 'Georgia',
                  textDecoration: 'underline',
                  fontSize: '1.5em',
                }}
                >{chore.title}</Card.Header>
                  <Card.Meta>
                    <span style={{ fontFamily: 'Georgia' }}>Assigned to:</span>
                    <span
                      style={{
                        fontSize: "1.2em",
                        color: "pink",
                        textShadow:
                          "1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px 0 black",
                        fontFamily: "Georgia",
                      }}
                    >
                      {chore.childName}
                    </span>
                  </Card.Meta>
                  
                  {/* Add difficulty level to Card.Meta */}
                  <Card.Meta>
                    ${chore.amount.toFixed(2)} | Difficulty:{" "}
                    {chore.difficulty ? chore.difficulty : "Medium"}
                  </Card.Meta>
                  <Card.Meta>
                    {chore.assignedSchedule ? chore.assignedSchedule : 'Not assigned'}
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "1em",
                          
                        }}
                      >
                        <ButtonExampleAnimated
                          choreAmount={chore.amount}
                          isCompleted={chore.isCompleted}
                          onClick={() => {
                            completeChore(chore._id, !chore.isCompleted);
                          }}
                          style={{
                            border: "2px solid black",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <Button.Group widths="2">
                        <Button
                          onClick={() => setEditingChoreId(chore._id)}
                          style={{
                            marginTop: "1em",
                            marginRight: "0.5em",
                            backgroundColor: "#779CFF",
                            color: "white",
                            border: "1px solid black",
                            borderRadius: "10px",
                          }}
                        >
                          Edit
                        </Button>
                        <DeleteChore
                          handleDelete={handleDelete}
                          choreId={chore._id}
                        />
                      </Button.Group>
                    </>
                  )}
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
