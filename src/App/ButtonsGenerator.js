import React from "react";

const ButtonsGenerator = ({ colorNum }) => {
  const colorList = [];

  for (let i = 0; i < colorNum; i++) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    colorList.push(`rgb(${red}, ${green}, ${blue})`);
  }

  return (
    <div>
      {colorList.map((color) => (
        <button
          className="color-btn"
          style={{
            backgroundColor: `${color}`,
          }}
          onClick={() => {
            document.body.style.backgroundColor = color;
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ButtonsGenerator;
