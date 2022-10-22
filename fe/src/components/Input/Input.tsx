import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as HideIcon } from "../../static/hide-eye-icon.svg";
import { ReactComponent as ShowIcon } from "../../static/show-eye-icon.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  :not(:first-child) {
    margin-top: 24px;
  }
`;

const InputStyled = styled.input`
  height: 40px;
  background-color: #f9f8f4;
  border: 1px solid #430066;
  border-radius: 3px;
  padding: 5px;

  &:focus {
    outline: 1px solid #430066;
  }
`;

const ErrorMessage = styled.span`
  margin-top: 3px;
  font-size: 14px;
  color: #ff0b0b;
`;

const EyeButton = styled.button`
  position: absolute;
  right: 3px;
  top: 12px;
  background: none;
  border: none;
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  errorMessage,
  type,
  onChange,
}: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <InputStyled
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={show ? "text" : type}
      />
      {type === "password" && (
        <EyeButton
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          {show ? <HideIcon /> : <ShowIcon />}
        </EyeButton>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export { Input };
