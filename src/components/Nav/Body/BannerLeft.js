import React from "react";
import "aos/dist/aos.css";
import {
  BannerLeft,
  BannerLeftText,
  BannerLeftUl,
  BannerLeftItem,
} from "./StylesBannerLeft.js";

const LeftBanner = (props) => {
  return (
    <BannerLeft
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <BannerLeftText>
        {props.lang ? "ПРЕИМУЩЕСТВА: " : "ADVANTAGES OF ZHUMYS LTD:"}
      </BannerLeftText>
      <BannerLeftUl>
        <li>
          <BannerLeftItem>> </BannerLeftItem>
          {props.lang
            ? "Соответствие строительства всем технологическим требованиям "
            : "Building compliance with all tech requirements"}
        </li>
        <li>
          <BannerLeftItem>> </BannerLeftItem>
          {props.lang
            ? "Высокая оперативность принятия решений "
            : "High efficiency of decision-making"}
        </li>
        <li>
          <BannerLeftItem>> </BannerLeftItem>
          {props.lang
            ? "Строгое соблюдение поручений заказчика "
            : "Strict adherence to the customer orders"}
        </li>
        <li>
          <BannerLeftItem>> </BannerLeftItem>
          {props.lang
            ? "Наличие положительных отзывов довольных клиентов "
            : "Positive reviews of the satisfied clients"}
        </li>
        <li>
          <BannerLeftItem>> </BannerLeftItem>
          {props.lang
            ? "Гибкие условия оплаты "
            : "Flexible conditions of payment"}
        </li>
      </BannerLeftUl>
    </BannerLeft>
  );
};
export default LeftBanner;
