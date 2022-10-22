import React, { SyntheticEvent, useCallback, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import styled from "styled-components";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../utils/firebase/firebase";
import SignInGithubButton from "./SignInGithubButton";

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

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
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
    },
    [fields]
  );

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
          <SignInGithubButton />
        </form>
      </LoginContainer>
    </Container>
  );
};

export { Login };
