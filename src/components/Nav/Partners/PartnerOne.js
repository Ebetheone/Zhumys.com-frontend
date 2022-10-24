import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Span, LogoHref, Img, SpanTwo, PartnerTwo } from "./StylesPartner.js";

const Partners = () => {
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
      <PartnerTwo>
        <Span
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <LogoHref href="">
            <Img src="/images/partner_logos/images/parners_logo_01.png" />
          </LogoHref>
          <LogoHref href="">
            <Img src="/images/partner_logos/images/parners_logo_02.png" />
          </LogoHref>
          <LogoHref href="">
            <Img src="/images/partner_logos/images/parners_logo_04.png" />
          </LogoHref>
        </Span>
        <SpanTwo
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <LogoHref href="">
            <Img src="/images/partner_logos/images/parners_logo_05.png" />
          </LogoHref>
          <LogoHref href="">
            <Img src="/images/partner_logos/images/parners_logo_06.png" />
          </LogoHref>
        </SpanTwo>
      </PartnerTwo>
    </div>
  );
};
export default Partners;
