import React from "react";
import content from "../../content/content";

const Content = content();
const card = ({theme,lang, setTheme, setLang}) => {
  const selectedLangContent = Content[lang];

  const handSelectLang = (e) => {
    localStorage.setItem("lang", e.target.value);
    setLang(e.target.value);
  }
  const handSelectTheme = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  }
  return (
    <>
      <div className="card-wrapper">
        <div className="container">
          <div className={`card py-2 px-3 mt-3 mx-auto ${theme}`}>
            <div className="d-flex flex-row">
              <div className="d-flex py-2">
                <label htmlFor="lang">{selectedLangContent.selectLang}</label>
                <select name="lang" id="lang" onChange={handSelectLang}>
                  <option value="en" selected={(lang == "en")}>English</option>
                  <option value="uz" selected={(lang == "uz")}>Uzbek</option>
                </select>
              </div>
              <div className="py-2 ms-3">
                <label htmlFor="theme">{selectedLangContent.selectTheme}</label>
                <select name="theme" id="theme" onChange={handSelectTheme}>
                  <option value="light" selected={(theme == "light")}>Light Mode</option>
                  <option value="dark" selected={(theme == "dark")}>Dark Mode</option>
                </select>
              </div>
            </div>

            <form className="d-flex flex-column mt-3" action="post">
              <label htmlFor="username">{selectedLangContent.userNameText}</label>
              <input className="w-50" type="text" placeholder="enter user name.." />

              <label htmlFor="password">{selectedLangContent.userPassword}</label>
              <input className="w-50" type="password" placeholder="enter password.." />

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
