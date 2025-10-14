import { useState, type ChangeEvent, useRef, useEffect } from "react";

import "./styles.css";

export const EmAsteriscos = () => {
  const [input, setInput] = useState("");
  const [converted, setConverted] = useState("");
  const [hideAll, setHideAll] = useState(false);
  const [hideOnlyNumber, setHideOnlyNumbers] = useState(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    const regex = hideAll ? /\w/g : hideOnlyNumber ? /\d/g : /\w/;
    const convertedValue = input.replace(regex, "*");

    setConverted(convertedValue);
  }, [input, hideAll, hideOnlyNumber]);

  return (
    <div className="container">
      <div className="container-checkboxs">
        <label className="extra-margin-right">
          <input
            type="checkbox"
            id="hideAll"
            checked={hideAll}
            onChange={() => setHideAll((prev) => !prev)}
          />
          Esconder todos
        </label>
        <label>
          <input
            type="checkbox"
            id="hideOnlyNumbers"
            checked={hideOnlyNumber}
            onChange={() => setHideOnlyNumbers((prev) => !prev)}
          />
          Apenas números
        </label>
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

      <div className="container-informacao">{converted}</div>
    </div>
  );
};
