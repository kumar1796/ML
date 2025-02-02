import React from "react";
import Test from "../../../test";

const InnerFile = () => {
  return (
    <div>
      <h1>This is a component</h1>
      <p>Nested inside two folders</p>
      <Test />
    </div>
  );
};

export default InnerFile;
