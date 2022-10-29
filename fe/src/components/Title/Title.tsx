import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1``;

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export { Title };
