import React from "react";
import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LogoRappi4 from "./logo-future-eats-invert.png";
import {
  FormContainer,
  LinkCadastro,
  Container,
  LogoRappi,
  Text,
} from "./styled-LoginPage";
import { theme } from "../../constants/themes";

function LoginPage() {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoRappi src={LogoRappi4} />
        <Text>Entrar</Text>
        <form>
          <FormContainer>
            <TextField
              color="secondary"
              label="Email"
              placeholder="email@email.com"
              type="email"
              variant="outlined"
              margin="dense"
              required
            />
            <TextField
              color="secondary"
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              type="password"
              variant="outlined"
              margin="dense"
              required
            />
            <Button type="submit" color="secondary" variant="contained">
              Login
            </Button>
            <LinkCadastro color="textPrimary">
              Não possui cadastro? Clique aqui
            </LinkCadastro>
          </FormContainer>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
