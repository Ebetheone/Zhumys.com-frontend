import styled from "styled-components";

export const Content = styled.div`
  width: 61%;
  margin: 0 auto;
  @media screen and (max-width: 1686px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1470px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1284px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1144px) {
    width: 96%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div``;
export const LogoHref = styled.a``;
export const LogoImg = styled.img`
  width: 200px;
  @media only screen and (max-width: 768px) {
    width: 150px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
  }
`;
export const Menu = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  line-height: 20px;
  display: block;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
export const MenuList = styled.ul`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  @media only screen and (max-width: 1070px) {
    display: none;
  }
`;
export const Language = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  @media only screen and (max-width: 1070px) {
    display: none;
  }
`;
export const LanguageList = styled.ul`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: flex;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  list-style: none;
  padding: 0;
`;
