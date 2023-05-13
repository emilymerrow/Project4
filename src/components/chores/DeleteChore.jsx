import React from "react";
import { Button } from "semantic-ui-react";

const DeleteChore = ({ handleDelete, choreId }) => {
  return (
    <Button
    onClick={() => handleDelete(choreId)}
    style={{
      marginTop: "1em",
      backgroundColor: "#779CFF",
      color: "white",
      border: "1px solid black",
      borderRadius: "10px",
    }}
  >
    Delete
  </Button>
  
  );
};

export default DeleteChore;
