import styled from "styled-components";

export const BannerRight = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  padding-left: 50px;
  line-height: 20px;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const BannerLeftText = styled.h1`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const BannerLeftUl = styled.ul`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  line-height: 25px;
  padding: 5px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
  list-style: none;
  .li {
    font-size: 14px;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
  }
`;
