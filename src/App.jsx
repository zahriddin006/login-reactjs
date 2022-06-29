import React, { useState } from 'react';
import Main from "./components/main/card";

const App = () => {

  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <>
      <Main lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
    </>
  );
};

export default App;