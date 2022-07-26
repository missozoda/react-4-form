import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'

const App = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <>
      <div className={`login-page ${theme} vh-100`}>
        <div className="container-md">
          <Header
            lang={lang}
            setLang={setLang}
            theme={theme}
            setTheme={setTheme}
          />
          <Main>
            <Form theme={theme} lang={lang} />
          </Main>

          <Footer theme={theme}/>
        </div>
      </div>
    </>
  );
};

export default App;