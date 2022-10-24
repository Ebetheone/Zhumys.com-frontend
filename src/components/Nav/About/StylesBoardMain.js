import styled from "styled-components";

export const BoardMain = styled.div`
  width: 100%;
`;
export const BoardDirector = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    float: left;
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
export const Director = styled.div`
  box-sizing: border-box;
  float: left;
  margin: 0 auto;
  width: 21%;
  @media screen and (max-width: 1500px) {
    width: 25%;
  }
  @media screen and (max-width: 1400px) {
    width: 28%;
  }
  @media screen and (max-width: 1260px) {
    width: 31%;
  }
  @media screen and (max-width: 1160px) {
    width: 35%;
  }
  @media screen and (max-width: 1060px) {
    width: 38%;
  }
  @media screen and (max-width: 1000px) {
    width: 41%;
  }
  @media screen and (max-width: 940px) {
    width: 44%;
  }
  @media screen and (max-width: 890px) {
    width: 47%;
  }
  @media screen and (max-width: 768px) {
    float: none;
    width: 50%;
  }
`;
export const DirectorHref = styled.a`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 17px;
  text-align: left;
  text-decoration-color: rgb(254, 94, 0);
  text-decoration-style: solid;
  visibility: visible;
  :hover {
    color: rgb(35, 82, 124);
    text-decoration: underline;
  }
`;
export const DirectorImg = styled.img`
  width: 230px;
  height: 220px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  padding: 0 10px;
  visibility: visible;
  @media screen and (max-width: 1500px) {
    width: 200px;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    height: auto;
  }
`;
export const Directorinfo = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 17.15px;
  text-align: center;
  visibility: visible;
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1500px) {
    align-items: center;
    margin: 0;
    float: none;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 0 auto;
    align-items: center;
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
export const Br = styled.br``;
