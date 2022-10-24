import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StaticData } from "../../../constants/Carousel.js";
import { Carousel } from "react-responsive-carousel";
import { Picture, PictureDiv, Img } from "./StylesPictures.js";

const PictureOfProjects = () => {
  return (
    <Picture>
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
        {StaticData.map((item, index) => (
          <PictureDiv key={index}>
            <Img src={item.imgUrl} />
          </PictureDiv>
        ))}
      </Carousel>
    </Picture>
  );
};
export default PictureOfProjects;
