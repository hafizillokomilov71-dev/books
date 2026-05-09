import { Button as FlowBiteButton } from "flowbite-react";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  color: string;
}

const Button = ({ children, color }: IProps) => {
  return <FlowBiteButton color={color}>{children}</FlowBiteButton>;
};
export default Button;
