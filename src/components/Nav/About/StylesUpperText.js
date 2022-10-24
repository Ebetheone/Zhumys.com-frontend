import styled from "styled-components";

export const Uppertext = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 10px;
  padding-top: 40px;
`;
export const UppertextPart = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 25px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    float: none;
  }
`;
export const UppertextImg = styled.img`
  box-sizing: border-box;
  float: left;
  padding-bottom: 20px;
  padding-right: 20px;
  width: 18%;
  @media only screen and (max-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-width: 920px) {
    width: 40%;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;
