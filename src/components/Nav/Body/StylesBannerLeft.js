import styled from "styled-components";

export const BannerLeft = styled.div`
  box-sizing: border-box;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 1px;
  padding-right: 10px;
  @media only screen and (max-width: 768px) {
    border-right: none;
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
export const BannerLeftItem = styled.span`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
`;
