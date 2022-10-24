import React from "react";
import {
  Br,
  Span,
  MailHref,
  RightSection,
  Target,
  SmallImg,
  Img,
} from "./StyledRightSection.js";

const SectionRight = (props) => {
  return (
    <RightSection>
      <span>
        <strong>{props.lang ? "ЖУМЫС, LTD." : "ZHUMYS LTD"}</strong>
      </span>
      <Br />
      {props.lang
        ? "010000 г. Астана,  Алматинский район, ул. Созак 5, район «КамазЦентр»"
        : "5 Sozak, Astana, Kazakhstan"}
      <Br />
      <Br />
      <Span> +7 7172 490627</Span>
      <Br />
      <Span> +7 701 8076748</Span>
      <Br />
      <MailHref href="">info@zhumys.com</MailHref>
      <Br />
      <Target href="https://goo.gl/maps/D6bywSjtFFymnFBv5">
        {props.lang ? "Карта расположения" : "Directions"}
      </Target>
      <SmallImg src="/images/Location_icon.png" />
      <Br />
      <Img src="/images/Zhumys_hard_hat.png" />
    </RightSection>
  );
};
export default SectionRight;
