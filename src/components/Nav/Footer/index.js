import React from "react";
import { Clear, Main, Content, LeftItem, RightItem, ItemUl } from "./Styles.js";

export default function Footer(props) {
  return (
    <div>
      <Clear />
      <Main>
        <Content>
          <LeftItem>
            {props.lang
              ? "Строительная организация Жумыс Все права защищены© 2015 "
              : "© 2015 Zhumys Construction, LLC."}
          </LeftItem>
          <RightItem>
            <ItemUl>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-pinterest-square"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin-square"></i>
                </a>
              </li>
            </ItemUl>
          </RightItem>
        </Content>
      </Main>
    </div>
  );
}
