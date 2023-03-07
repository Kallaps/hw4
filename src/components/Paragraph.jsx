import React, { useState } from "react";

export const Paragraph = (props) => {
  return (
    <div className="Paragraph">
      <input className="Input" type="text" onChange={props.inpData} />
      <button onClick={() => props.saveAdd()} className="InputBtn">
        add
      </button>
    </div>
  );
};
