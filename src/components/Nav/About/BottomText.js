import React from "react";
import "aos/dist/aos.css";
import { Bottomtext, BottomParagraph } from "./StylesBottomText.js";

const TextBottom = (props) => {
  return (
    <Bottomtext
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <BottomParagraph>
        {props.lang
          ? "Компания оснащена строительной техникой, имеет необходимую производственную базу и складские помещения, укомплектован опытным инженерно-техническим и рабочим персоналом. Коллектив мобилен, способен в короткий срок и качественно выполнить любые поставленные задачи. "
          : "The Company owns modern construction machinery, has a necessary production base and warehouses, and employs experienced engineering and technical staff and workers. The working team of the Company is very mobile and can fulfill any tasks in a short time and with high quality."}
      </BottomParagraph>
    </Bottomtext>
  );
};
export default TextBottom;
