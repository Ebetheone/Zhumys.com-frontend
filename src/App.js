import React, { Fragment, useState } from "react";
import Navbar from "./components/Nav/Header";
import Section from "./components/Nav/Body";
import Teams from "./components/Nav/About";
import Vitae from "./components/Nav/Projects";
import Partner from "./components/Nav/Partners";
import Recomand from "./components/Nav/Recomandation";
import Career from "./components/Nav/Career";
import Input from "./components/Nav/Contact";
import Footer from "./components/Nav/Footer";

function App() {
  const [lang, setLang] = useState(false);
  const toggle = () => {
    setLang((prevLang) => !prevLang);
  };
  return (
    <Fragment>
      <Navbar toggle={toggle} lang={lang} />
      <Section lang={lang} />
      <Teams lang={lang} />
      <Vitae lang={lang} />
      <Partner lang={lang} />
      <Recomand lang={lang} />
      <Career lang={lang} />
      <Input lang={lang} />
      <Footer lang={lang} />
    </Fragment>
  );
}

export default App;
