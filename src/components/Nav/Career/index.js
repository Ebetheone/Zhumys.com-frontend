import React from "react";
import BoxTexts from "./TextBox.js";
import ManagerThing from "./Manager.js";
import {
  Clear,
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Section,
} from "./StyledIndex.js";

export default function Career(props) {
  return (
    <div>
      <Clear />
      <div id="Career">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "ВАКАНСИИ" : "CAREERS"}</BlueTitle>
            <BlackTitle href="#Up">
              {props.lang ? "ВЕРНУТЬСЯ К НАЧАЛУ " : "BACK TO TOP"}
              <i className="fa-solid fa-chevron-up"></i>
            </BlackTitle>
            <Clear />
          </Title>
          <Clear />
          <Section>
            <BoxTexts />
            <ManagerThing lang={props.lang} />
          </Section>
        </Content>
      </div>
    </div>
  );
}
