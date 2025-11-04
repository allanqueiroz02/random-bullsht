import { GiThrownDaggers } from "react-icons/gi";
import { VscColorMode } from "react-icons/vsc";

import "./style.css";

export const Header = () => {
  function handleClickTheme() {
    console.log("clicou no ícone");
  }

  return (
    <div className="container-header">
      <h1 className="header">
        Random Bullshit Go!!!! <GiThrownDaggers />
      </h1>
      <VscColorMode
        className="theme-icon"
        title="Alterar tema"
        onClick={handleClickTheme}
      />
    </div>
  );
};
