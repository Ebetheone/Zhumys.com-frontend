import React, { useState } from "react";
import { MenubarTitle } from "./StylesHamburger.js";

const Hamburger = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hamburger-menu" onClick={() => setOpen(true)}>
        <i className="fa fa-bars"></i>
      </div>
      {open && <div className="emptyarea" onClick={() => setOpen(false)}></div>}
      <div style={{ left: open ? 0 : "-180vw" }} className="hamburger-bar">
        <MenubarTitle>
          <li>
            {open && (
              <a href="#About" onClick={() => setOpen(false)}>
                ABOUT
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="#Projects" onClick={() => setOpen(false)}>
                PROJECTS
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="#Partner" onClick={() => setOpen(false)}>
                PARTNERS
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="#Recomand" onClick={() => setOpen(false)}>
                RECOMANDATIONS
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="#Career" onClick={() => setOpen(false)}>
                CAREERS
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="#Contact" onClick={() => setOpen(false)}>
                CONTACT
              </a>
            )}
          </li>
          <li>
            {open && (
              <a
                href=""
                onClick={() => {
                  setOpen(false);
                  props.toggle();
                }}
              >
                EN
              </a>
            )}
          </li>
          <li>
            {open && (
              <a href="" onClick={(() => setOpen(false), props.toggle())}>
                RU
              </a>
            )}
          </li>
        </MenubarTitle>
      </div>
    </div>
  );
};
export default Hamburger;
