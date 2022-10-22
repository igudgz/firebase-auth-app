import React, { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 350px;
    > button {
      width: 100%;
      margin-top: 24px;
    }
  }
`;

interface errorMsgs {
  email: string;
  password: string;
}

interface fields extends errorMsgs {}

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
      return;
    }

    setErrorMsgs({
      ...errorMsgs,
      email: "",
    });

    if (fields.password === "") {
      setErrorMsgs({
        ...errorMsgs,
        password: "Digite sua senha",
      });
      return;
    }

    setErrorMsgs({
      ...errorMsgs,
      password: "",
    });
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    return setFields({ ...fields, [target.name]: target.value });
  };

  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit}>
        <h1>Login</h1>
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
