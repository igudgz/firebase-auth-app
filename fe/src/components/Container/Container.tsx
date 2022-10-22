import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return <Main>{children}</Main>;
};

export { Container };
