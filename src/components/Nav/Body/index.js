import React from "react";
import TextBanner from "./BannerText.js";
import LeftBanner from "./BannerLeft.js";
import RightBanner from "./BannerRight.js";
import {
  Main,
  Banner,
  MainImg,
  Content,
  BannerList,
  BannerListOne,
  BannerListTwo,
} from "./StylesIndex.js";

export default function Section(props) {
  return (
    <Main>
      <Banner>
        <div id="Up">
          <MainImg src="/images/header-banner.jpg" />
        </div>
      </Banner>
      <Content>
        <TextBanner lang={props.lang} />
        <BannerList>
          <BannerListOne>
            <LeftBanner lang={props.lang} />
          </BannerListOne>
          <BannerListTwo>
            <RightBanner lang={props.lang} />
          </BannerListTwo>
        </BannerList>
      </Content>
    </Main>
  );
}
