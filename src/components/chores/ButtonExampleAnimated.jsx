import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonExampleAnimated = ({ choreAmount, isCompleted, onClick }) => (
  <div>
    <Button
      animated
      onClick={onClick}
      style={{ backgroundColor: isCompleted ? "lightgreen" : "pink" }}
    >
      <Button.Content visible>
        {isCompleted ? "COMPLETED" : "INCOMPLETE"}
      </Button.Content>
      <Button.Content hidden>${choreAmount}</Button.Content>
    </Button>
    {/* You can remove the other buttons if you don't need them */}
  </div>
);

export default ButtonExampleAnimated;
