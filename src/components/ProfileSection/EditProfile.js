import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, ThemeProvider } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { editUser } from "../../services/PutProfile";

import { theme } from "../../constants/themes";
import styled from "styled-components";

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
  }

  Button {
    margin-top: 16px;
  }
`;

const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 7vw;
`;

function EditProfile() {
  const history = useHistory;

  const [form, handleInput] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const EditUser = (event) => {
    event.preventDefault();

    const element = document.getElementById("addres_form");
    const isValid = element.checkValidity();
    element.reportValidity();

    if (isValid) {
      //requisição api,o body é a resposta do formulario
      editUser(form, history);
    }
    console.log(form, "form do adrres aqui");
  };

  return (
    <ThemeProvider theme={theme}>
      <AddressContainer>
        <Title>Editar</Title>
        <form id={"addres_form"}>
          <TextField
            value={form.name}
            name={"name"}
            onChange={handleInput}
            label="Nome"
            placeholder="Nome"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={handleInput}
            label="Email"
            placeholder="Email"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            value={form.cpf}
            name={"cpf"}
            onChange={handleInput}
            label="CPF"
            placeholder="Cpf"
            type={"number"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <Button
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            onClick={EditUser}
          >
            Salvar
          </Button>
        </form>
      </AddressContainer>
    </ThemeProvider>
  );
}

export default EditProfile;
