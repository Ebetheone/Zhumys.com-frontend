import styled from "styled-components";

export const Span = styled.span`
  box-sizing: border-box;
  display: inline-block;
`;
export const LogoHref = styled.a`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Img = styled.img`
  cursor: pointer;
  height: 65px;
  margin-right: 30px;
  :hover {
    margin-top: -65px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 10px;
  }
`;
export const SpanTwo = styled.span`
  display: inline-block;
`;
export const Clear = styled.div`
  box-sizing: border-box;
  clear: both;
  color: rgb(51, 51, 51);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
`;
export const PartnerTwo = styled.div`
  box-sizing: border-box;
  margin-left: 10%;
  margin-right: 10%;
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 70%;
    margin: 0 auto;
  }
`;
