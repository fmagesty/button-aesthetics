import React, { useState } from "react";
import ButtonsGenerator from "./ButtonsGenerator";

const InputColorNum = () => {
  const [input, setInput] = useState("");

  if (input > 1000) {
    setInput("0");
  }

  return (
    <div>
      <h1>Type a number between 1 and 1000</h1>
      <input
        type="number"
        placeholder="Type a number between 1 and 999"
        className="input-colorNum"
        onChange={(e) => setInput(e.target.value)}
      />
      <ButtonsGenerator colorNum={input} />
    </div>
  );
};

export default InputColorNum;
