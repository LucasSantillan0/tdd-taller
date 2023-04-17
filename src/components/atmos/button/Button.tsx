import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={`button button--${variant}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
