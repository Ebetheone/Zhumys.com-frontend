import React from "react";
import "aos/dist/aos.css";
import { Uppertext, UppertextPart, UppertextImg } from "./StylesUpperText.js";

const TextUpper = (props) => {
  return (
    <Uppertext
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <UppertextPart>
        <UppertextImg src="/images/Zhumys_Flag.png" />
        {props.lang
          ? "Товарищество с ограниченной ответственностью «ЖҰМЫС» осуществляет свою деятельность в архитектурной, градостроительной и строительной сфере с 2003 года. Объем работ, выполненных в течении нескольких последних лет, с такими компаниями как АО Казахтелеком, АО Пассажирские перевозки, АО ҚазМұнайГаз Өнімдері, АО Қазтеміртранс, АО КазМунайГаз – переработка и маркетинг,АО Локомотив Курастыру зауыты,ГУ Комитет государственной ветеринарной инспекции в агропромышленном комплексе Министерства сельского хозяйства РК, РГП Резерв КГМР МЧС РК и многие другие. "
          : "Liability Limited Partnership «Zhumys» carries out the activity in architectural, town-planning and construction sphere since 2003. The scope of work, performed during in the last few years, with companies such as: «Kazakhtelecom» JSC, «Pas- sazhirskiye perevozki» JSC, «KasMunaiGas Onimderi» JSC, «KazTemirTrans» JSC, «KazMunaiGaz – processing and marketing» JSC, «Committee of the State Inspec- torate in agroindustrial complex of the Ministry of Agriculture of RoK», CSMR of MES RK and Reserve RSE and many others."}
      </UppertextPart>
    </Uppertext>
  );
};
export default TextUpper;
