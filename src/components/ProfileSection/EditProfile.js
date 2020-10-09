import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../Hooks/useForm";
import { editUser } from "../../services/PutProfile";

import { theme } from "../../constants/themes";
import { TextField, Button, ThemeProvider } from "@material-ui/core";

import { AddressContainer, Title } from "../AddressSection/styles";

function EditProfile() {
  const history = useHistory();

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
      editUser(form, history);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/");
    }
  }, []);

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
