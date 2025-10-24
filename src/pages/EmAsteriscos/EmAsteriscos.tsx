import { useState, type ChangeEvent, useRef, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

import "./styles.css";

export const EmAsteriscos = () => {
  const [input, setInput] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [hideAll, setHideAll] = useState(false);
  const [hideOnlyNumber, setHideOnlyNumbers] = useState(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClickCopy = () => {
    console.log(convertedValue);
    navigator.clipboard.writeText(convertedValue);
    alert("Copiou o texto");
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    const regex = hideAll ? /\w/g : hideOnlyNumber ? /\d/g : /\w/;
    const convertedValue = input.replace(regex, "*");

    setConvertedValue(convertedValue);
  }, [input, hideAll, hideOnlyNumber]);

  return (
    <div className="container">
      <div className="container-checkbox">
        <div className="flex">
          <input
            type="checkbox"
            id="hideAll"
            checked={hideAll}
            onChange={() => setHideAll((prev) => !prev)}
          />
          <label htmlFor="hideAll">Esconder todos</label>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="hideOnlyNumbers"
            checked={hideOnlyNumber}
            onChange={() => setHideOnlyNumbers((prev) => !prev)}
          />
          <label htmlFor="hideOnlyNumbers">Apenas números</label>
        </div>
      </div>

      <div className="container-input">
        <input
          ref={inputRef}
          name="asterisco"
          value={input}
          onChange={handleChange}
          placeholder="Digite aqui..."
        />
      </div>

      <div className="container-informacao">{convertedValue}</div>

      <div className="container-copiar-btn">
        <button onClick={handleClickCopy}>
          Copiar! <FaRegCopy />
        </button>
      </div>
    </div>
  );
};
