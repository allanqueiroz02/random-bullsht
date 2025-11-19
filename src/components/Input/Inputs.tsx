import type { Dispatch, SetStateAction } from "react";
import "./style.css";

interface IInputProps {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Input = ({ name, value, onChange }: IInputProps) => {
  return (
    <div className="input-group">
      <input
        type="text"
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=""
      />
      <label>{name}</label>
    </div>
  );
};
