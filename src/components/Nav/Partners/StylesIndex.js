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
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TitleHr = styled.hr`
  border-top-color: rgb(192, 192, 192);
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: content-box;
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
  background-clip: border-box;
  box-sizing: border-box;
  color: rgb(42, 142, 209);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 23px;
  line-height: 33px;
  position: relative;
  width: 15%;
  @media screen and (max-width: 1500px) {
    display: flex;
    top: 0;
    align-items: center;
    justify-content: left;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    top: 0;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: left;
    margin: 0;
  }
`;
export const BlackTitle = styled.a`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 11px;
  line-height: 15px;
  position: absolute;
  right: 0px;
  text-align: left;
  text-decoration: none;
  top: 60%;
  cursor: pointer;
  @media screen and (max-width: 1500px) {
    display: flex;
    top: 0;
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
  }
  i {
    box-sizing: border-box;
    color: rgb(254, 94, 0);
    cursor: pointer;
    display: inline-block;
    font-family: FontAwesome;
    font-feature-settings: normal;
    font-kerning: auto;
    font-language-override: normal;
    font-optical-sizing: auto;
    font-size: 12px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    line-height: 11px;
    text-align: left;
    text-rendering: auto;
    transform: matrix(1, 0, 0, 1, 0, 0);
    padding-left: 5px;
  }
`;
export const Clear = styled.div`
  box-sizing: border-box;
  clear: both;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
`;
export const Logos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1736px) {
    width: 60%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
