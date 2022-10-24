import styled from "styled-components";

export const Picture = styled.div`
  box-sizing: border-box;
  width: 60%;
  margin: 0 auto;
  padding-top: 50px;
  @media screen and (max-width: 1500px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-top: 20px;
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
export const PictureDiv = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
`;
