import React from "react";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next"; // You already get 'i18n' from this hook
import heart from "/assets/images/svgs/heart.svg";
import AboutUs from "/src/pages/aboutUs";
const App = () => {
  const { t, i18n } = useTranslation(); // i18n from the hook

  return (
    <I18nextProvider i18n={i18n}>
      <div className="h-screen w-full flex justify-center items-center">
        <AboutUs />
      </div>
    </I18nextProvider>
  );
};

export default App;
