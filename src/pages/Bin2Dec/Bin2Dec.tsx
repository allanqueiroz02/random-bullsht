import { FaExchangeAlt } from "react-icons/fa";

import "./style.css";
import { useCallback, useEffect, useState, type ChangeEvent } from "react";

export const Bin2Dec = () => {
  const [binNumber, setBinNumber] = useState("");
  const [convertedNumber, setConvertedNumber] = useState("");

  const convertBinToDec = useCallback(() => {
    let total = 0;
    let expoent = binNumber.length - 1;

    if (!binNumber) {
      setConvertedNumber("");
      return;
    }

    // 1010111
    for (let index = 0; index < binNumber.length; index++) {
      const element = Number(binNumber[index]);
      const multipler = Math.pow(2, expoent);
      const result = element * multipler;

      total += result;
      expoent--;
    }

    setConvertedNumber(`${total}`);
  }, [binNumber]);

  const handleBinaryNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBinNumber(event.target.value);
  };

  useEffect(() => {
    convertBinToDec();
  }, [binNumber, convertBinToDec]);

  return (
    <div className="container-bin">
      <div className="content">
        <input
          type="number"
          value={binNumber}
          onChange={handleBinaryNumberChange}
          placeholder="apenas 0 e 1"
          id="bin-number"
        />
      </div>
      <div className="container-change-icon">
        <FaExchangeAlt />
      </div>
      <div className="content">
        <input
          type="text"
          value={convertedNumber}
          placeholder="resultado..."
          id="converted-number"
          disabled
        />
      </div>
    </div>
  );
};
