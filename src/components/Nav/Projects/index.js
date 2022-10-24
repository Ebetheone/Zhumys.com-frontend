import React from "react";
import Animation from "./OneBy.js";
import PictureOfProjects from "./Pictures.js";
import {
  Clear,
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Real,
  Border,
} from "./StylesIndex.js";

export default function Vitae(props) {
  return (
    <div>
      <Clear />
      <div id="Projects">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "ПРОЕКТЫ" : "PROJECTS"}</BlueTitle>
            <BlackTitle href="#Up">
              {props.lang ? "ВЕРНУТЬСЯ К НАЧАЛУ " : "BACK TO TOP"}
              <i className="fa-solid fa-chevron-up"></i>
            </BlackTitle>
            <Clear />
          </Title>
          <Clear />
          <Real>
            <Border></Border>
            <Animation lang={props.lang} />
            <PictureOfProjects />
          </Real>
        </Content>
      </div>
    </div>
  );
}
