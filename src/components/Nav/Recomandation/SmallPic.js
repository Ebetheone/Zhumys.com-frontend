import React from "react";
import {
  PictureDiv,
  PictureHref,
  PictureOne,
  PictureIcon,
} from "./StyledSmallPic.js";

const SmallPic = ({ setOpen, tab }) => {
  return (
    <div>
      <PictureDiv>
        {tab.map((item, index) => (
          <PictureHref href="" key={index}>
            <PictureOne src={item.imgUrl} />
          </PictureHref>
        ))}
      </PictureDiv>
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
    </div>
  );
};
export default SmallPic;
