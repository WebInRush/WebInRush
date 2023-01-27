import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  bgColor?: string;
  textColor?: string;
  type?: "submit" | "button";
  children?: ReactNode;
};

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
};

const StyledButton = styled.button<ButtonProps>`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  width: 100%;
  border: none;
  background-color: rgb(var(${(props) => props.bgColor}));
  color: rgb(var(${(props) => props.textColor}));
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    filter: drop-shadow(0 0 0.75rem rgb(var(${(props) => props.bgColor}), 0.5));
    border-radius: 3rem;
  }
`;

const Button = ({ children, bgColor, textColor, type }: Props) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
