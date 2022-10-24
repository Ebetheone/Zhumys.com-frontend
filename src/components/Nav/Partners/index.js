import React from "react";
import Partners from "./PartnerOne.js";
import {
  Clear,
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Logos,
} from "./StylesIndex.js";

export default function Partner(props) {
  return (
    <div>
      <Clear />
      <div id="Partner">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "ПАРТНЕРЫ" : "PARTNERS"}</BlueTitle>
            <BlackTitle href="#Up">
              {props.lang ? "ВЕРНУТЬСЯ К НАЧАЛУ " : "BACK TO TOP"}
              <i className="fa-solid fa-chevron-up"></i>
            </BlackTitle>
            <Clear />
          </Title>
          <Clear />
          <Logos>
            <Partners />
          </Logos>
        </Content>
      </div>
    </div>
  );
}
