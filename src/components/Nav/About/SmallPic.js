import React from "react";
import { PictureDiv, PictureHref, PictureOne } from "./StylesSmallPic.js";

const SmallPic = () => {
  return (
    <PictureDiv>
      <ul>
        <li>
          <PictureHref href="">
            <PictureOne src="/images/certificates/certificate_1.png" />
          </PictureHref>
        </li>
        <li>
          <PictureHref href="">
            <PictureOne src="/images/certificates/certificate_2.png" />
          </PictureHref>
        </li>
        <li>
          <PictureHref href="">
            <PictureOne src="/images/certificates/certificate_3.png" />
          </PictureHref>
        </li>
        <li>
          <PictureHref href="">
            <PictureOne src="/images/certificates/certificate_4.png" />
          </PictureHref>
        </li>
      </ul>
    </PictureDiv>
  );
};
export default SmallPic;
