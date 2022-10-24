import React from "react";
import { LanguageItemButton, LanguageItems } from "./StylesLanguageItems.js";

const LanguageNames = (props) => {
  return (
    <div>
      <LanguageItems>
        <LanguageItemButton onClick={props.toggle}>EN</LanguageItemButton>
      </LanguageItems>
      <LanguageItems>|</LanguageItems>
      <LanguageItems>
        <LanguageItemButton onClick={props.toggle}>RU</LanguageItemButton>
      </LanguageItems>
    </div>
  );
};
export default LanguageNames;
