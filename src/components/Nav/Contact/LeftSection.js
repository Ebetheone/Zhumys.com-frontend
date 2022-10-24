import React from "react";
import {
  LeftSection,
  ContactForm,
  ItemContact,
  ContactTitle,
  Button,
  Clear,
  Br,
} from "./StyledLeftSection.js";

const SectionLeft = (props) => {
  return (
    <LeftSection>
      <ContactForm>
        <ItemContact>
          <ContactTitle>
            {props.lang ? "Ваше Имя : " : "Your Name: "}
          </ContactTitle>
          <input type="text" placeholder="Your Name: "></input>
          <Clear />
        </ItemContact>
        <Clear />
        <ItemContact>
          <ContactTitle>{props.lang ? "Емайл :" : "Email: "}</ContactTitle>
          <input type="text" placeholder="Email "></input>
          <Clear />
        </ItemContact>
        <Clear />
        <ItemContact>
          <ContactTitle>{props.lang ? "Телефон: " : "Phone: "}</ContactTitle>
          <input type="text" placeholder="Phone "></input>
          <Clear />
        </ItemContact>
        <Clear />
        <ItemContact>
          <ContactTitle>{props.lang ? "Cообщение:" : "Message: "}</ContactTitle>
          <textarea placeholder="Message"></textarea>
          <Clear />
        </ItemContact>
        <Clear />
        <Button>{props.lang ? "Отправить" : "Submit"}</Button>
        <Br />
        <Button>{props.lang ? "Сброс" : "Send"}</Button>
      </ContactForm>
    </LeftSection>
  );
};
export default SectionLeft;
