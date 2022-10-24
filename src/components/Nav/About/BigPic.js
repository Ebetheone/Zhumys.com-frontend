import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Slide, ImgDiv, Img } from "./StylesBigPic.js";

const BigPic = () => {
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
        <ImgDiv>
          <Img src="/images/certificates/certificate_1.png" />
        </ImgDiv>
        <ImgDiv>
          <Img src="images/certificates/certificate_2.png" />
        </ImgDiv>
        <ImgDiv>
          <Img src="images/certificates/certificate_3.png" />
        </ImgDiv>
        <ImgDiv>
          <Img src="images/certificates/certificate_4.png" />
        </ImgDiv>
      </Carousel>
    </Slide>
  );
};
export default BigPic;
