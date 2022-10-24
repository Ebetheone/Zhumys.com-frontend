import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Slide, Img, ImgDiv } from "./StyledBigPic.js";

const BigPic = ({ tab }) => {
  return (
    <Slide>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowNext={(clickHandler, hasNext, labelNext) => (
          <div
            className="fa fa-angle-right fa-3x"
            style={{
              cursor: "pointer",
              zIndex: 99,
              position: "relative",
            }}
            onClick={clickHandler}
          ></div>
        )}
        renderArrowPrev={(clickHandler, hasNext, labelNext) => (
          <div
            className="fa fa-angle-left fa-3x"
            style={{
              cursor: "pointer",
              zIndex: 99,
              position: "relative",
            }}
            onClick={clickHandler}
          ></div>
        )}
      >
        {tab.map((item, index) => (
          <ImgDiv key={index}>
            <Img src={item.imgUrl} />
          </ImgDiv>
        ))}
      </Carousel>
    </Slide>
  );
};
export default BigPic;
