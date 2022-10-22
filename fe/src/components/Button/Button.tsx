import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 40px;
  color: #f9f8f4;
  background-color: #430066;
  border: 1px solid #f9f8f4;
  border-radius: 3px;
  font-weight: bold;
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, onClick, name }: Props) => {
  return (
    <ButtonStyled onClick={onClick} name={name}>
      {children}
    </ButtonStyled>
  );
};

export { Button };
