import React, { useState } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import Language from "../Language/Language"

const content = Language();
const Form = ({ lang, theme }) => {
  const selectedLanContent = content[lang];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userInfos, setUserInfos] = useState([]);

  const collectInfos = (e) => {
    e.preventDefault();
    const formInfo = {
      username,
      password,
    };
    setUserInfos([...userInfos, formInfo]);
    setUsername("")
    setPassword("")
  };

  return (
    <>
      <form
        className={`${theme === "dark" ? "dark-form" : ""} form card p-3 pb-5 mt-4`}
        onSubmit={collectInfos}
      >
        <h1 className="text-center text-primary py-3 mb-4">
          {selectedLanContent.loginText}
        </h1>
        <Input
          val={username}
          set={setUsername}
          type={"text"}
          placeholder={selectedLanContent.usernameText}
          lang={lang}
          theme={theme}
        />
        <Input
          val={password}
          set={setPassword}
          type={"password"}
          placeholder={selectedLanContent.passwordText}
          lang={lang}
          theme={theme}
        />
        <Button btn={"btn-primary"} type={"submit"} lang={lang} theme={theme} />
      </form>
    </>
  );
};

export default Form;