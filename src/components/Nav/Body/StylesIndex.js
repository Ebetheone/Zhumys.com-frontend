import styled from "styled-components";

export const Main = styled.div`
  padding-top: 90px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  position: relative;
`;
export const Banner = styled.div`
  box-sizing: border-box;
  display: block;
`;
export const MainImg = styled.img`
  vertical-align: middle;
  width: 100%;
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
export const BannerList = styled.div`
  box-sizing: border-box;
  float: left;
  padding-bottom: 20px;
  position: relative;
  @media only screen and (max-width: 768px) {
    float: none;
    align-items: center;
    justify-content: center;
  }
`;
export const BannerListOne = styled.div`
  float: left;
  position: relative;
  width: calc(100% / 2);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const BannerListTwo = styled.div`
  float: left;
  position: relative;
  width: calc(100% / 2);
  @media only screen and (max-width: 768px) {
    float: none;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
