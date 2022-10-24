import React from "react";
import {
  Br,
  Manager,
  ManagerImg,
  ManagerItems,
  ManagerHref,
  Span,
} from "./StyledManager.js";

const ManagerThing = (props) => {
  return (
    <Manager>
      <ManagerImg src="/images/people/botaguz.png" />
      <ManagerItems>
        {props.lang ? "Менеджер по административной работе" : "HR Manager"}
        <Br />
        {props.lang ? "Имамбаева Ботагоз Ирикбаевна" : "Botakoz Imambayeva"}
        <Br />
        <ManagerHref href="">botakoz@zhumys.com</ManagerHref>
        <Br />
        {props.lang ? "Oфис:" : "Office :"}
        <Span>+77172 490627</Span>
        <Br />
        {props.lang ? "Мобильные:" : "Cell :"}
        <Span>+77018076722</Span>
      </ManagerItems>
    </Manager>
  );
};
export default ManagerThing;
