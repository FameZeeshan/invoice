// ParentComponent.js
import React from "react";
import PDF from "./PDF";
import Form from "./Form";

const ParentComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <PDF />
      <Form />
    </div>
  );
};

export default ParentComponent;
