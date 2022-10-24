import React from "react";
import { MenuItems, MenuItemsHref } from "./StylesMenuItems.js";

const MenuNames = (props) => {
  return (
    <div>
      <MenuItems>
        <MenuItemsHref href="#About">
          {props.lang ? "О КОМПАНИИ" : "ABOUT"}
        </MenuItemsHref>
      </MenuItems>
      <MenuItems>
        <MenuItemsHref href="#Projects">
          {props.lang ? "ПРОЕКТЫ" : "PROJECTS"}
        </MenuItemsHref>
      </MenuItems>
      <MenuItems>
        <MenuItemsHref href="#Partner">
          {props.lang ? "ПАРТНЕРЫ" : "PARTNERS"}
        </MenuItemsHref>
      </MenuItems>
      <MenuItems>
        <MenuItemsHref href="#Recomand">
          {props.lang ? "ОТЗЫВЫ" : "RECOMANDATIONS"}
        </MenuItemsHref>
      </MenuItems>
      <MenuItems>
        <MenuItemsHref href="#Career">
          {props.lang ? "ВАКАНСИИ" : "CAREERS"}
        </MenuItemsHref>
      </MenuItems>
      <MenuItems>
        <MenuItemsHref href="#Contact">
          {props.lang ? "КОНТАКТЫ" : "CONTACT"}
        </MenuItemsHref>
      </MenuItems>
    </div>
  );
};
export default MenuNames;
