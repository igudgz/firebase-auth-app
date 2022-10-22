import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../static/github-icon.svg";

const Button = styled.button`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f8f4;
  background-color: #222222;
  border-radius: 3px;
  font-weight: bold;

  svg {
    width: 30px;
    margin-right: 16px;
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SignInGithubButton: React.FC<Props> = ({
  onClick,
  name,
  type,
}: Props) => {
  return (
    <Button onClick={onClick} name={name} type={type}>
      <GithubIcon />
      Entre com Github
    </Button>
  );
};

export default SignInGithubButton;
