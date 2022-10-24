import React from "react";
import "aos/dist/aos.css";
import {
  BannerRight,
  BannerLeftText,
  BannerLeftUl,
} from "./StylesBannerRight.js";

const RightBanner = (props) => {
  return (
    <BannerRight
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <BannerLeftText>
        {props.lang
          ? "ГАРАНТИРУЕТ СВОИМ КЛИЕНТАМ:"
          : "GUARANTEE OF ZHUMYS LTD:"}
      </BannerLeftText>
      <BannerLeftUl>
        <li>
          {props.lang
            ? "1. Соблюдение оговоренных сроков строительства, благодаря большому количеству ранее сданных объектов "
            : "1. Compliance with the agreed dates of building due to the large quantity of commissioned projects."}
        </li>
        <li>
          {props.lang
            ? "2. Работа в рамках утвержденной сметы, благодаря наличию собственной техники, оборудования и опытного персонала "
            : "2. Work under the approved budget, by providing machinery, equipment, and experienced personnel."}
        </li>
      </BannerLeftUl>
    </BannerRight>
  );
};
export default RightBanner;
