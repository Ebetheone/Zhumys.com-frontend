import styled from "styled-components";

export const PictureIcon = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  text-align: center;
  i {
    box-sizing: border-box;
    color: rgb(102, 102, 102);
    display: inline-block;
    font-family: FontAwesome;
    font-feature-settings: normal;
    font-kerning: auto;
    font-language-override: normal;
    font-optical-sizing: auto;
    font-size: 28px;
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
    line-height: 28px;
    margin-right: 10px;
    text-align: center;
    text-rendering: auto;
    transform: matrix(1, 0, 0, 1, 0, 0);
    cursor: pointer;
  }
  i:hover {
    color: rgb(254, 94, 0);
  }
`;
export const PictureDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  place-content: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`;
export const PictureHref = styled.a`
  box-sizing: border-box;
  color: rgb(102, 102, 102);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-decoration-color: rgb(102, 102, 102);
  text-decoration-line: none;
  text-decoration-style: solid;
  cursor: pointer;
`;
export const PictureOne = styled.img`
  height: 140px;
  width: 110px;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;
