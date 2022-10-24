import styled from "styled-components";

export const Slide = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  width: 61%;
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
  box-sizing: border-box;
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
