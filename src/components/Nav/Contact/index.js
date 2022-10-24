import React from "react";
import SectionLeft from "./LeftSection.js";
import SectionRight from "./RightSection.js";
import {
  Clear,
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Section,
} from "./StyledIndex.js";

export default function Input(props) {
  return (
    <div>
      <Clear />
      <div id="Contact">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "КОНТАКТЫ" : "CONTACT"}</BlueTitle>
            <BlackTitle href="#Up">
              {props.lang ? "ВЕРНУТЬСЯ К НАЧАЛУ " : "BACK TO TOP"}
              <i className="fa-solid fa-chevron-up"></i>
            </BlackTitle>
            <Clear />
          </Title>
          <Clear />
          <Section>
            <SectionLeft lang={props.lang} />
            <SectionRight lang={props.lang} />
            <Clear />
          </Section>
        </Content>
      </div>
    </div>
  );
}
