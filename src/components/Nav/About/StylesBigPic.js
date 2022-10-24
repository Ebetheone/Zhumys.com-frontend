import styled from "styled-components";

export const Slide = styled.div`
  color: rgb(51, 51, 51);
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 1600px) {
    width: 70%;
  }
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  .fa-angle-left {
    position: absolute;
    margin-right: 20px;
    top: 50%;
    transform: translateY(40%);
  }
  .fa-angle-right {
    position: absolute;
    margin-left: 20px;
    top: 50%;
    transform: translateY(40%);
  }
  .fa-angle-left:hover {
    color: rgb(254, 94, 0);
  }
  .fa-angle-right:hover {
    color: rgb(254, 94, 0);
  }
`;
export const ImgDiv = styled.div`
  backface-visibility: hidden;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  left: 0px;
  line-height: 20px;
  position: relative;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition-delay: 0s;
  transition-duration: 0.6s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
`;
export const Img = styled.img`
  height: 100%;
`;
