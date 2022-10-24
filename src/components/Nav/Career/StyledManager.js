import styled from "styled-components";

export const Br = styled.br``;
export const Manager = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  padding-top: 20px;
  width: 36%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    display: flex;
  }
`;
export const ManagerImg = styled.img`
  box-sizing: border-box;
  float: left;
  vertical-align: middle;
  height: 200px;
  @media screen and (max-width: 350px) {
    width: 150px;
    height: 170px;
  }
`;
export const ManagerItems = styled.div`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  float: left;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 22px;
  margin-left: 10px;
  margin-top: 10px;
  width: 50%;
`;
export const ManagerHref = styled.a`
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 22px;
  text-decoration-color: rgb(254, 94, 0);
  text-decoration-line: none;
  text-decoration-style: solid;
  :hover {
    color: rgb(35, 82, 124);
    text-decoration: underline;
  }
`;
export const Span = styled.span`
  box-sizing: border-box;
  color: rgb(254, 94, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 22px;
`;
