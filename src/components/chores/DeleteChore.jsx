import React from "react";
import { Button } from "semantic-ui-react";

const DeleteChore = ({ handleDelete, choreId }) => {
  return (
    <Button
      basic
      color="red"
      onClick={() => handleDelete(choreId)}
    >
      Delete
    </Button>
  );
};

export default DeleteChore;
