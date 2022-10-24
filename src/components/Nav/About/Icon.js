import React from "react";
import { PictureIcon } from "./StylesIcon.js";

const Icon = ({ setOpen }) => {
  return (
    <PictureIcon>
      <button onClick={() => setOpen(true)}>
        <i className="fa fa-list" aria-hidden="true"></i>
      </button>
      <button onClick={() => setOpen(false)}>
        <i className="fa fa-th" aria-hidden="true"></i>
      </button>
    </PictureIcon>
  );
};
export default Icon;
