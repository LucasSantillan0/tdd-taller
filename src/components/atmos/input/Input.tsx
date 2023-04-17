import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({ errorMessage, onChange, ...props }) => {
  return (
    <div className="input">
      <input
        type="text"
        onChange={(e) => onChange(e)}
        className={`input__textbox ${errorMessage && "input__textbox--error"}`}
        {...props}
      />
      {errorMessage && (
        <span className="input__error-message">{errorMessage}</span>
      )}
    </div>
  );
};
export default Input;
