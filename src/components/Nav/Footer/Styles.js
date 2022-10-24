import styled from "styled-components";

export const Main = styled.div`
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  width: 100%;
  height: 40px;
`;
export const Clear = styled.div`
  box-sizing: border-box;
  clear: both;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
`;
export const Content = styled.div`
  box-sizing: border-box;
  width: 61%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const LeftItem = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 11px;
  line-height: 40px;
`;
export const RightItem = styled.div`
  display: flex;
  float: right;
`;
export const ItemUl = styled.ul`
  align-items: center;
  padding: 0;
  margin: 0;
  li {
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    float: left;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 40px;
    list-style-type: none;
    padding-right: 10px;
  }
  a {
    box-sizing: border-box;
    color: rgb(102, 102, 102);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 40px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-decoration-color: rgb(102, 102, 102);
    text-decoration-line: none;
    text-decoration-style: solid;
  }
  i {
    box-sizing: border-box;
    color: rgb(102, 102, 102);
    display: inline-block;
    font-family: FontAwesome;
    font-feature-settings: normal;
    font-kerning: auto;
    font-language-override: normal;
    font-optical-sizing: auto;
    font-size: 20px;
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
    line-height: 20px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    text-rendering: auto;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  i:hover {
    color: rgb(254, 94, 0);
  }
`;
