import React, { useState } from "react";
import TextUpper from "./UpperText.js";
import TextBottom from "./BottomText.js";
import SmallPic from "./SmallPic.js";
import BigPic from "./BigPic.js";
import Icon from "./Icon.js";
import MainBoard from "./BoardMain.js";
import {
  Content,
  Title,
  TitleHr,
  BlueTitle,
  BlackTitle,
  Clear,
  Text,
  Picture,
  PictureTitle,
  Pictures,
  Board,
  BoardTitle,
  BoardHr,
  BoardTitleText,
} from "./StylesIndex.js";

export default function Teams(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Clear />
      <div id="About">
        <Content>
          <Title>
            <TitleHr></TitleHr>
            <BlueTitle>{props.lang ? "О КОМПАНИИ" : "ABOUT US"}</BlueTitle>
            <BlackTitle>
              {props.lang ? "КОМПАНИЯ / КОМАНДЫ" : "COMPANY / TEAMS"}
            </BlackTitle>
            <Clear />
          </Title>
          <Text>
            <TextUpper lang={props.lang} />
            <TextBottom lang={props.lang} />
          </Text>
          <Clear />
          <Picture>
            <PictureTitle>
              {props.lang
                ? "Квалификация и профессионализм нашей компании подтверждены соответствующими государственными лицензиями 1 категории и сертификатами соответствия. "
                : "Qualification and professionalism of our company are supported by appropriate state licenses and certificates of compliance."}
            </PictureTitle>
            <Pictures>{open ? <SmallPic /> : <BigPic />}</Pictures>
            <Clear />
            <Icon setOpen={setOpen} />
          </Picture>
          <Board>
            <BoardTitle>
              <BoardHr></BoardHr>
              <BoardTitleText>
                {props.lang ? "ЧЛЕНЫ СОВЕТА" : "THE BOARD OF DIRECTORS"}
              </BoardTitleText>
            </BoardTitle>
            <MainBoard lang={props.lang} />
          </Board>
        </Content>
      </div>
    </div>
  );
}
