import React from "react";
import { PictureIcon } from "./StyledIcon.js";

const Icon = ({ setOpen }) => {
  return (
    <PictureIcon>
      <i
        className="fa fa-list"
        aria-hidden="true"
        onClick={() => setOpen(true)}
      ></i>
      <i
        className="fa fa-th"
        aria-hidden="true"
        onClick={() => setOpen(false)}
      ></i>
    </PictureIcon>
  );
};
export default Icon;
