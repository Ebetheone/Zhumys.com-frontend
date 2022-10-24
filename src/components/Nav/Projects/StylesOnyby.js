import styled from "styled-components";

export const Oneby = styled.div`
  box-sizing: border-box;
  margin-left: 0.055%;
  margin-top: 0.027%;
  padding-right: 100px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Line = styled.hr`
  width: 100%;
  height: 0;
  border-color: rgb(192, 192, 192);
  border-style: solid;
`;
export const Br = styled.br``;

export const Explanation = styled.div`
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 25px;
  padding-bottom: 20px;
  padding-left: 100px;
  padding-top: 20px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    padding-left: 75px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
export const DateTime = styled.div`
  color: rgb(254, 94, 0);
  display: flex;
  i {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(254, 94, 0);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    box-sizing: border-box;
    float: left;
    height: 15px;
    width: 15px;
  }
`;
export const DateYear = styled.div`
  padding-right: 15px;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;
