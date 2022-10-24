import styled from "styled-components";

export const Content = styled.div`
  box-sizing: border-box;
  width: 61%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
export const TitleHr = styled.hr`
  border-color: rgb(192, 192, 192);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(128, 128, 128);
  position: relative;
  top: 76%;
  width: 70%;
  @media screen and (max-width: 1500px) {
    width: 60%;
    top: 25px;
  }
  @media screen and (max-width: 1160px) {
    width: 50%;
  }
  @media screen and (max-width: 930px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const BlueTitle = styled.p`
  box-sizing: border-box;
  color: rgb(42, 142, 209);
  font-size: 23px;
  line-height: 33px;
  position: relative;
  width: 15%;
  @media screen and (max-width: 1500px) {
    display: flex;
    top: 0;
    width: 50%;
    align-items: center;
    justify-content: left;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    top: 0;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: left;
    margin: 0;
  }
`;
export const BlackTitle = styled.p`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  right: 0px;
  width: 15%;
  text-align: right;
  top: 30%;
  @media screen and (max-width: 1500px) {
    display: flex;
    top: 0;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: right;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    top: 0;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: right;
    margin: 0;
  }
`;
export const Text = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  position: relative;
`;
export const Picture = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  min-height: 1px;
  position: relative;
  width: 100%;
`;
export const PictureTitle = styled.div`
  animation-duration: 1s;
  animation-fill-mode: both;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 25px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  text-align: center;
  width: 100%;
`;
export const Pictures = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
export const Board = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const BoardTitle = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 50px;
  line-height: 20px;
  position: relative;
  text-align: center;
`;
export const BoardHr = styled.hr`
  border-color: rgb(192, 192, 192);
  border-top-style: solid;
  border-top-width: 1 px;
  box-sizing: content-box;
  color: rgb(128, 128, 128);
  line-height: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  text-align: center;
  top: 35px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const BoardTitleText = styled.div`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(242, 242, 242);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  left: 42%;
  line-height: 20px;
  position: relative;
  text-align: center;
  top: 2px;
  width: 20%;
  @media screen and (max-width: 950px) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    left: 0;
  }
`;
export const Clear = styled.div`
  box-sizing: border-box;
  clear: both;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
`;
