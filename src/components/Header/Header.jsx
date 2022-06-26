import React from "react";
import Language from "../Language/Language";

const content = Language();
const Header = ({ lang, theme, setLang, setTheme }) => {
  const selectedLanContent = content[lang];

  const handleSetLang = (e) => {
    localStorage.setItem("lang", e.target.value);
    setLang(e.target.value);
  };

  const handleSetTheme = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <>
      <header className="header fs-2 pt-4 d-flex justify-content-between">
        <h3 className="heading fw-bold text-primary mx-5">Header</h3>
        <select
          className={`${theme === "dark" ? "dark-select" : ""} form-select w-50 mx-5`}
          id="language"
          onChange={handleSetLang}
        >
          <option value="en" selected={lang === "en"}>
            {selectedLanContent.langEng}
          </option>
          <option value="uz" selected={lang === "uz"}>
            {selectedLanContent.langUz}
          </option>
        </select>
        <select
          className={`${theme === "dark" ? "dark-select" : ""} form-select w-50 mx-5`}
          id="theme"
          onChange={handleSetTheme}
        >
          <option value="light" selected={theme === "light"}>
            {selectedLanContent.themeLight}
          </option>
          <option value="dark" selected={theme === "dark"}>
            {selectedLanContent.themeDark}
          </option>
        </select>
      </header>
    </>
  );
};

export default Header;