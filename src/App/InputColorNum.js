import React, { useState } from "react";
import ButtonsGenerator from "./ButtonsGenerator";

const InputColorNum = () => {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      console.log(input);
    }
  };

  return (
    <div>
      <input
        type="input"
        placeholder="Choose the number of colors you want to have"
        className="input-colorNum"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleEnter}
      />
      <ButtonsGenerator colorNum={input} />
    </div>
  );
};

export default InputColorNum;
