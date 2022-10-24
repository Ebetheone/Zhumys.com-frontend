import React, { useState } from "react";
import { StaticData } from "../../../constants/Pictures.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SmallPic from "./SmallPic.js";
import BigPic from "./BigPic.js";
import Icon from "./Icon.js";
import {
  Clear,
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Section,
} from "./StyledIndex.js";

export default function Recomand(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Clear />
      <div id="Recomand">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "ОТЗЫВЫ" : "RECOMANDATIONS"}</BlueTitle>
            <BlackTitle href="#Up">
              {props.lang ? "ВЕРНУТЬСЯ К НАЧАЛУ " : "BACK TO TOP"}
              <i className="fa-solid fa-chevron-up"></i>
            </BlackTitle>
            <Clear />
          </Title>
          <Clear />
          {open ? (
            <SmallPic setOpen={setOpen} tab={StaticData} />
          ) : (
            <Section>
              <BigPic tab={StaticData} />
              <Clear />
              <Icon setOpen={setOpen} />
            </Section>
          )}
        </Content>
      </div>
    </div>
  );
}
