import { FaExchangeAlt } from "react-icons/fa";

import "./style.css";

export const Bin2Dec = () => {
  return (
    <div className="container-bin">
      <div className="content">
        <input type="number" placeholder="apenas 0 e 1" />
      </div>
      <div className="container-change-icon">
        <FaExchangeAlt />
      </div>
      <div className="content">
        <input type="text" placeholder="resultado..." disabled />
      </div>
    </div>
  );
};
