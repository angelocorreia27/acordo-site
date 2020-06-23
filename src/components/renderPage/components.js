import React from "react";
import Button from "./Button";
import Text from "./Text";
import TextArea from "./TextArea";

const Components = {
  button: Button,
  text: Text
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block.id,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.id }
  );
};