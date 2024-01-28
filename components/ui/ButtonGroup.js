// components/ui/ButtonGroup.js
import React from 'react';

const ButtonGroup = ({ buttons, activeButton, setActiveButton }) => {
  return (
    <div className="flex flex-wrap justify-around items-center">
      {buttons.map((button) => (
        <button
          key={button}
          className={`w-40-m mv3 mh2 w3-button w3-border ${activeButton === button ? "w3-border-blue w3-blue" : "w3-border-red w3-deep-orange hover-w3-border-orange hover-w3-sand"}`}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
