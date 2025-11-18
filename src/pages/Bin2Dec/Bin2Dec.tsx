import { FaExchangeAlt } from "react-icons/fa";

import "./style.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";

export const Bin2Dec = () => {
  const [whichSystem, setWhichSystem] = useState<"binary" | "decimal">(
    "binary"
  );
  const [numberToConvert, setNumberToConvert] = useState("");
  const [convertedNumber, setConvertedNumber] = useState("");

  const inputNumberToConvertRef = useRef<HTMLInputElement | null>(null);

  const binToDec = useCallback(() => {
    let total = 0;
    let expoent = numberToConvert.length - 1;

    if (!numberToConvert) {
      setConvertedNumber("");
      return;
    }

    for (let index = 0; index < numberToConvert.length; index++) {
      const element = Number(numberToConvert[index]);
      const multipler = Math.pow(2, expoent);
      const result = element * multipler;

      total += result;
      expoent--;
    }

    setConvertedNumber(`${total}`);
  }, [numberToConvert]);

  const decToBin = useCallback(() => {
    if (!numberToConvert) {
      setConvertedNumber("");
      return;
    }

    if (Number(numberToConvert) === 0) {
      setConvertedNumber("0");
      return;
    }

    if (Number(numberToConvert) === 1) {
      setConvertedNumber("1");
      return;
    }

    const arrTotal: number[] = [];

    function calcula(valor: number) {
      arrTotal.push(valor % 2);

      const valorFinal = Math.floor(valor / 2);

      if (valorFinal !== 1) calcula(valorFinal);
      if (valorFinal === 1) arrTotal.push(1);

      return;
    }

    calcula(Number(numberToConvert));

    const formattedArr = arrTotal.reverse().join("");

    setConvertedNumber(formattedArr);
  }, [numberToConvert]);

  const handleSwitchSystem = () => {
    setNumberToConvert("");

    inputNumberToConvertRef.current?.focus();

    if (whichSystem === "binary") {
      setWhichSystem("decimal");
      return;
    }

    setWhichSystem("binary");
  };

  useEffect(() => {
    if (whichSystem === "binary") binToDec();
    else decToBin();
  }, [numberToConvert, binToDec, whichSystem, decToBin]);

  return (
    <div className="container-bin">
      <div className="content">
        <label>
          Converter de{" "}
          <strong>{whichSystem === "binary" ? "binário" : "decimal"}</strong>
        </label>
        <input
          type="number"
          value={numberToConvert}
          onChange={(e) => setNumberToConvert(e.target.value)}
          placeholder={whichSystem === "binary" ? "informe apenas 0 e 1" : ""}
          id="bin-number"
          ref={inputNumberToConvertRef}
        />
      </div>
      <div className="container-change-icon">
        <Button onClick={handleSwitchSystem} title="Trocar sistema númerico">
          <FaExchangeAlt />
        </Button>
      </div>
      <div className="content">
        <label>
          Para{" "}
          <strong>{whichSystem === "binary" ? "decimal" : "binário"}</strong>
        </label>
        <input
          type="text"
          value={convertedNumber}
          placeholder="resultado"
          id="converted-number"
          disabled
        />
      </div>
    </div>
  );
};
