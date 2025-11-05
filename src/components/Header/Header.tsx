import { GiThrownDaggers } from "react-icons/gi";
import { TbSunMoon } from "react-icons/tb";

import "./style.css";

export const Header = () => {
  function handleClickTheme() {
    const bodyClass = document.body.classList;

    if (bodyClass.contains("light-theme")) {
      bodyClass.remove("light-theme");
      bodyClass.add("dark-theme");
    } else {
      bodyClass.remove("dark-theme");
      bodyClass.add("light-theme");
    }
  }

  return (
    <div className="container-header">
      <h1 className="header">
        Random Bullshit Go!!!! <GiThrownDaggers />
      </h1>
      <TbSunMoon
        className="theme-icon"
        title="Alterar tema"
        onClick={handleClickTheme}
      />
    </div>
  );
};
