import styled from "styled-components";

export const Br = styled.br``;
export const RightSection = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: right;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 25px;
  text-align: right;
  width: 22.6%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Span = styled.span`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 25px;
  text-align: right;
`;
export const MailHref = styled.a`
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 25px;
  text-align: right;
  text-decoration-color: rgb(254, 94, 0);
  text-decoration-line: none;
  text-decoration-style: solid;
  :hover {
    color: rgb(35, 82, 124);
    text-decoration: underline;
  }
`;
export const SmallImg = styled.img`
  width: 15px;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 200px;
`;
export const Target = styled.a`
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: rgb(102, 102, 102);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 25px;
  text-align: right;
  text-decoration-color: rgb(102, 102, 102);
  text-decoration-line: none;
  text-decoration-style: solid;
  margin-right: 10px;
  padding-bottom: 10px;
  :hover {
    color: rgb(35, 82, 124);
    text-decoration: underline;
  }
`;
