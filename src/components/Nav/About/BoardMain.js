import React from "react";
import {
  BoardMain,
  BoardDirector,
  Director,
  DirectorImg,
  Directorinfo,
  Br,
  Clear,
  BoardTitle,
  BoardHr,
  BoardTitleText,
} from "./StylesBoardMain.js";

const MainBoard = (props) => {
  return (
    <BoardMain>
      <BoardDirector>
        <Director>
          <DirectorImg src="/images/people/Birzhan.png" />
          <Directorinfo>
            {props.lang ? "Основатель компании" : "Founder"}
            <Br />
            {props.lang ? "Кажигалиев Биржан " : "Birzhan Kazhigaliyev"}
          </Directorinfo>
        </Director>
      </BoardDirector>
      <Clear />
      <BoardTitle>
        <BoardHr></BoardHr>
        <BoardTitleText>
          {props.lang ? "СОВЕТ ДИРЕКТОРОВ " : "BOARD MEMBERS"}
        </BoardTitleText>
      </BoardTitle>
      <BoardDirector>
        <Director>
          <DirectorImg src="/images/people/rinat.png" />
          <Directorinfo>
            {props.lang ? "Руководитель проекта" : "Head of construction"}
            <Br />
            Тлеуленов Ринат
          </Directorinfo>
        </Director>
      </BoardDirector>
      <Clear />
      <Br />
      <BoardDirector>
        <Director>
          <DirectorImg src="/images/people/beybaris.png" />
          <Directorinfo>
            {props.lang ? "Руководитель проекта" : "Project manager"}
            <Br />
            Тлеугалиев Бейбарыс
          </Directorinfo>
        </Director>
        <Director>
          <DirectorImg src="/images/people/ramazan.png" />
          <Directorinfo>
            {props.lang
              ? "Главный учетчик"
              : "Accountant of conruction materials"}
            <Br />
            Кабыкенов Рамазан
          </Directorinfo>
        </Director>
        <Director>
          <DirectorImg src="/images/people/sapargali.png" />
          <Directorinfo>
            {props.lang ? "Мастер" : "Master of contruction"}
            <Br />
            Табанбаев Сапаргали
          </Directorinfo>
        </Director>
      </BoardDirector>
    </BoardMain>
  );
};
export default MainBoard;
