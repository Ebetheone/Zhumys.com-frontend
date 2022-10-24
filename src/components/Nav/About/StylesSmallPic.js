import styled from "styled-components";

export const PictureDiv = styled.div`
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  ul {
    @media screen and (max-width: 1400px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
    @media only screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
  }
  li {
    list-style: none;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    float: left;
    margin-bottom: 18px;
    margin-left: 18px;
    margin-right: 18px;
    margin-top: 18px;
    width: 18.75%;
    @media only screen and (max-width: 1500px) {
      float: none;
      width: 100%;
      margin: 0;
    }
    @media only screen and (max-width: 768px) {
      float: none;
      width: 80%;
      margin: 0;
    }
  }
`;
export const PictureHref = styled.a`
  box-sizing: border-box;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-decoration-color: rgb(102, 102, 102);
  text-decoration-line: none;
  text-decoration-style: solid;
  cursor: pointer;
`;
export const PictureOne = styled.img`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
