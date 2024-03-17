/* eslint-disable react/prop-types */
import React, {useState} from "react";

import {IntlProvider} from "react-intl";
import VietNam from "../../languages/vi.json";
import English from "../../languages/en.json";
export const Context = React.createContext();
const local = navigator.language;
let language;
if (local === "en") {
  language = English;
} else {
  language = VietNam;
}
const Translate = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(language);

  function selectLanguage(language) {
    const newLocale = language.target.value;
    setLocale(newLocale);

    if (newLocale === "en") {
      setMessages(English);
    } else {
      setMessages(VietNam);
    }
  }

  return (
    <Context.Provider value={{locale, selectLanguage}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Translate;
