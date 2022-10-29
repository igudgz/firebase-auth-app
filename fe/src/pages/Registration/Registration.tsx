import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import styled from "styled-components";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
  linkWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../../utils/firebase/firebase";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";

const RegistrationContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      width: 100%;
      margin-top: 24px;
    }
  }
`;

const SpanText = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

interface errorMsgs {
  email: string;
  password: string;
}

interface fields extends errorMsgs {}

const Registration: React.FC = () => {
  const [fields, setFields] = useState<fields>({
    email: "",
    password: "",
  });

  const [errorMsgs, setErrorMsgs] = useState<errorMsgs>({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(async (e: SyntheticEvent) => {
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

    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }, []);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    return setFields({ ...fields, [target.name]: target.value });
  };

  return (
    <Container>
      <RegistrationContainer onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <form>
          <Input
            name="email"
            label="Email"
            placeholder="Digite seu e-mail"
            errorMessage={errorMsgs.email && errorMsgs.email}
            type="text"
            onChange={updateField}
          />
          <Input
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
            errorMessage={errorMsgs.email && errorMsgs.email}
            type="text"
            onChange={updateField}
          />
          <Input
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={errorMsgs.password && errorMsgs.password}
            type="password"
            onChange={updateField}
          />
          <SpanText>
            Nao tem cadastro? <a href="/registration">Cadastre-se</a>
          </SpanText>
          <Button type="submit">Cadastrar</Button>
        </form>
      </RegistrationContainer>
    </Container>
  );
};

export { Registration };
