// ParentComponent.js
import React from "react";
import PDF from "./PDF";
import Form from "./Form";
import "./style.css";

const ParentComponent = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}
    >
      <PDF />
      <Form />
    </div>
  );
};

export default ParentComponent;
