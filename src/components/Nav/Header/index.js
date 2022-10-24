import React from "react";
import MenuNames from "./MenuItems.js";
import LanguageNames from "./LanguageItems.js";
import Hamburger from "./Hamburger.js";
import {
  Content,
  MainHeader,
  Logo,
  LogoHref,
  LogoImg,
  Menu,
  MenuList,
  Language,
  LanguageList,
} from "./StylesIndex.js";

export default function Navbar(props) {
  return (
    <div id="Home">
      <Content>
        <MainHeader>
          <Logo>
            <LogoHref href="#Home">
              <LogoImg src="/images/Zhumys_Logo.png"></LogoImg>
            </LogoHref>
          </Logo>
          <Menu>
            <MenuList>
              <MenuNames lang={props.lang} />
            </MenuList>
          </Menu>
          <Language>
            <LanguageList>
              <LanguageNames toggle={props.toggle} />
            </LanguageList>
          </Language>
          <Hamburger />
        </MainHeader>
      </Content>
    </div>
  );
}
