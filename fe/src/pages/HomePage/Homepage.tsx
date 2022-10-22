import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase/firebase";
import Button from "../../components/Button";
import { signOut } from "firebase/auth";

const HomeContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface User {
  email: string | null;
  name: string | null;
}

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          name: user.displayName,
        });
      } else {
        navigate("/login");
      }
    });
  }, []);

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Container>
      <HomeContainer>
        <h1>Oi, {user.name}! Voce foi logado com sucesso!</h1>
        <p>{user.email}, seu email de cria</p>
        <Button onClick={logout} type="button">
          Deslogar
        </Button>
      </HomeContainer>
    </Container>
  );
};

export { Homepage };
