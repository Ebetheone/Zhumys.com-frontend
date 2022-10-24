import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Oneby,
  Section,
  DateTime,
  DateYear,
  Line,
  Explanation,
  Br,
} from "./StylesOnyby.js";

const Animation = (props) => {
  function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight;
    var newHeight;

    (function run() {
      newHeight = elm.clientHeight;
      if (lastHeight !== newHeight) callback();
      lastHeight = newHeight;

      if (elm.onElementHeightChangeTimer) {
        clearTimeout(elm.onElementHeightChangeTimer);
      }

      elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }

  useEffect(() => {
    AOS.init();
    onElementHeightChange(document.body, function () {
      AOS.refresh();
    });
  }, []);
  return (
    <div>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2015</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Газификация населенных пунктов, подводящих сетей высокого давления в Меркенском районе Жамбылской области. Строительные работы по прокладке местных газопроводов."
            : "1. Gasification of 10 settlements, bringing networks of a high pressure in the Merke town of Zhambyl region. Construction works on laying of local gas pipelines"}
          <Br />
          {props.lang
            ? "2. Реконструкция автономного теплоснабжения социальных объектов на централизованную систему теплоснабжения г. Астана"
            : "2. Reconstruction of autonomous heat supply of social objects on the centralized system of heat supply,Astana city"}
          <Br />
          {props.lang
            ? "3.Продолжение строительство Бизнес Центра-18500м2 г.Астана "
            : "3. Construction of Business Center building, 18500m2,Astana city"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2014</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Строительство промышленной базы с БЦ -2500м2 г.Астана"
            : "1. Construction of industrial base, Astana city"}
          <Br />
          {props.lang
            ? "2. Строительство Бизнес Центра -18500м2 г.Астана "
            : "2. Construction of Business Center building, Astana city"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2013</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Строительство ветеринарных лабораторий в Акмолинской области,Министерство Сельской Хозяйственности "
            : "1. Construction of veterinary laboratories, Akmola region"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2011</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1.Капитальный ремонт административного – бытового здания “Филиала Экспресс Казакстан Темiр Жолы”» г. Алматы"
            : "1. Extension construction to trucker shop, Balkhash city"}
          <Br />
          {props.lang
            ? "2. Строительство пристройки тележечнему цеху. АО “Казакстан Темiр Жолы”"
            : "2. Construction and assembly work of gas stations in Almaty region,”KAZMUNAIGAZ”"}
          <Br />
          {props.lang
            ? "3. Строительно-монтажные работы автозаправочных станции АО “КазМунайГаз “ по Алматинской области"
            : "3. Construction of veterinary laboratories, Almaty region"}
          <Br />
          {props.lang
            ? "4. Строительство однотипных модульных ветеринарных лабораторий Алматинской области, ”Министерство Сельского Хозяйства РК”. Строительство Железнодорожного подъездного путя на станции ТЭЦ-3 в г.Астана "
            : "4. Construction of rail transport, approach track TPP–3 station in Astana city"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2010</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Капитальный ремонт резервуаров 6 группы филиала «Заря» РГП «Резерв» КГМР МЧС РК, г. Арысь"
            : " 1. Construction of gas station in Zhambyl region, “KAZMUNAIGAZ”"}
          <Br />
          {props.lang
            ? "2. Строительство автозаправочной станции в Жамбылской области, п. Амангельды, трасса Алматы – Ташкент 528 км. Капитальный ремонт перекрытия и кровли на здании резерва проводников станции Алматы – 2. "
            : "2. Construction of oil storage tanks"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2009</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Продолжение строительства 5-и этажного жилого дома ЖК «Меркур Град» мкр.Думан 2 в г. Алматы "
            : "1. Construction of 5-floored building in Almaty city"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2006</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Капитальный ремонт здания АТС – 2, здание АТЦ – 2 Жалыойского РУТ г.Кулсары. Капитальный ремонт административного здания филиала АО «Казахтелеком» г. Кызылорда "
            : "1. Administrative building construction of «Kazakhtelecom» JSC Branch, Kyzylorda city"}
        </Explanation>
      </Oneby>
      <Oneby
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Section>
          <DateTime>
            <DateYear>2005</DateYear>
            <i className="fa-solid fa-circle"></i>
          </DateTime>
          <Line></Line>
        </Section>
        <Explanation>
          {props.lang
            ? "1. Строительство административного здания, ЮКО, г. Кентау(субподряд)"
            : "1. Construction of administrative building, SKR, Kentau city (subcontract)"}

          <Br />
          {props.lang
            ? "2. Новое строительство сооружений телекоммуникаций Филиал АО «Казахтелеком» г.Шымкент"
            : "2. New construction of telecommunications facilities «Kazakhtelecom» JSC Branch, Shymkent city"}
          <Br />
          {props.lang
            ? "3. Новое строительство 3-х этажного общежития Акимата г. Кызылорда, ул. Коркыт Ата, 3"
            : "3. New construction of three-floored dormitory of the Akimat of Kyzylorda city"}
          <Br />
          {props.lang
            ? "4. Строительство административного здания, г. Астана, ул. Лермонтова, 71"
            : "4. Administrative building construction, Astana city"}
          <Br />
          {props.lang
            ? "5. Новое строительство СЛ КЛС на участке Абай – 15 лет Казахстана Трасформаторная подстанция (ТП) ВЛ 10 Кызылординская область. "
            : "5. New construction of CL CCL on the site Abai– Kazakhstan’s 15 anniversary. Transformer substation (TS) OL 10 Kyzylorda region."}
        </Explanation>
      </Oneby>
    </div>
  );
};
export default Animation;
