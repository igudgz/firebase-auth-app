import React, { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import styled from "styled-components";

const LoginContainer = styled.div``;

interface errorMsgs {
  email: string;
  password: string;
}

interface fields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [fields, setFields] = useState<fields>({
    email: "",
    password: "",
  });

  const [errorMsgs, setErrorMsgs] = useState<errorMsgs>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (fields.email === "") {
      setErrorMsgs({
        ...errorMsgs,
        email: "Digite seu e-mail!",
      });
    }

    if (fields.password === "") {
      setErrorMsgs({
        ...errorMsgs,
        password: "Digite sua senha",
      });
    }
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    return setFields({ ...fields, [target.name]: target.value });
  };

  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit}>
        <form>
          <Input
            name="email"
            placeholder="Digite seu e-mail"
            errorMessage={errorMsgs.email && errorMsgs.email}
            type="text"
            onChange={updateField}
          />
          <Input
            name="password"
            placeholder="Digite sua senha"
            errorMessage={errorMsgs.password && errorMsgs.password}
            type="password"
            onChange={updateField}
          />
          <Button type="submit">Login</Button>
        </form>
      </LoginContainer>
    </Container>
  );
};

export { Login };
