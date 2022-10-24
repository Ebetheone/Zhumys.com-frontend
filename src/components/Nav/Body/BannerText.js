import React from "react";
import { BannerText } from "./StylesBannerText.js";
import "aos/dist/aos.css";

const TextBanner = (props) => {
  return (
    <BannerText
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      {props.lang
        ? "МЫ ДОСТОЙНО ГОРДИМСЯ КОГДА НАШИ КЛИЕНТЫ В ВОСТОРГЕ ОТ НАШИХ УСЛУГ И СОТРУДНИЧЕСТВА С НАМИ. НАША КОМПАНИЯ ИМЕЯ ОПЫТ, ЗНАНИЯ, КОМАНДУ ПРОФЕССИОНАЛОВ И ПАРК СОБСТВЕННОЙ ТЕХНИКИ, СТАВИТ ПЕРЕД СОБОЙ ЗАДАЧУ: РЕАЛИЗАЦИЯ ВЫСОКОКАЧЕСТВЕННЫХ ПРОЕКТОВ ДАЖЕ В СЛОЖНЫХ РЫНОЧНЫХ УСЛОВИЯХ. НАДЕЖНОСТЬ, ДОБРОПОРЯДОЧНОСТЬ И СТРОГОЕ СОБЛЮДЕНИЕ СРОКОВ СДАЧИ ОБЪЕКТОВ - ГЛАВНЫЕ КАЧЕСТВА, ПОЗВОЛЯЮЩИЕ НАМ ВЫПОЛНЯТЬ СВОЮ МИССИЮ "
        : "WE ARE PROUD TO SAY OUR CUSTOMERS ARE DELIGHTED WITH OUR SERVICES AND COOPERATION. OUR COMPANY HAS THE EXPERIENCE AND KNOWLEDGE OF A PROFESSIONAL TEAM, AS WELL AS THE MACHINERY FOR THE IMPLEMENTATION OF HIGH QUALITY PROJECTS, EVEN IN DIFFICULT MARKET CONDITIONS. RELIABILITY, INTEGRITY, AND STRICT ADHERENCE TO THE DELIVERY OF PROJECTS ON TIME ARE THE MAIN QUALITIES THAT ENABLE US TO FULFILL THIS MISSION."}
    </BannerText>
  );
};
export default TextBanner;
