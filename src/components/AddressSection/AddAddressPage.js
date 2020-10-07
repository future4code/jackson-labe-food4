import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, ThemeProvider } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { addresUserCard } from "../../services/AddresUser";

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

function AddAddressPage() {
  const history = useHistory;
  /*nesse caso um um estado só recebe dois parametros como objeto dos campos de input ao inves 
  de criar um para cada input*/
  const [form, handleInput] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  /* Botão que envia os dados a api cria endereço */
  const createAddres = (event) => {
    /* previne o comportamento padrao do form */
    event.preventDefault();
    /* validação do form, já que tiramos a comum pelo prevent */
    /* pegando o elemento form pelo dom */
    const element = document.getElementById("addres_form");
    /* verificando a validação do elemento */
    const isValid = element.checkValidity();
    /* chamando a validação */
    element.reportValidity();
    /* só fará a requisição se passar na validação */
    if (isValid) {
      //requisição api,o body é a resposta do formulario
      addresUserCard(form, history);
    }
    console.log(form, "form do adrres aqui");
  };

  return (
    <ThemeProvider theme={theme}>
      <AddressContainer>
        <Title>Meu Endereço</Title>
        <form id={"addres_form"}>
          <TextField
            /* Valor vindo do input = form estado*/
            value={form.street}
            /* vem da função handle, onde ele vai alterar somente o nome dos campos */
            name={"street"}
            onChange={handleInput}
            label="Logradouro"
            placeholder="Rua / Av."
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            /* Valor vindo do input = form estado*/
            value={form.number}
            /* vem da função handle, onde ele vai alterar somente o nome dos campos */
            name={"number"}
            onChange={handleInput}
            label="Número"
            placeholder="Número"
            type={"number"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />
          <TextField
            /* Valor vindo do input = form estado*/
            value={form.complement}
            name={"complement"}
            onChange={handleInput}
            label="Complemento"
            placeholder="Apto. / Bloco"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
          />

          <TextField
            /* Valor vindo do input = form estado*/
            value={form.neighbourhood}
            name={"neighbourhood"}
            onChange={handleInput}
            label="Bairro"
            placeholder="Bairro"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            /* Valor vindo do input = form estado*/
            value={form.city}
            name={"city"}
            onChange={handleInput}
            label="Cidade"
            placeholder="Cidade"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            /* Valor vindo do input = form estado*/
            value={form.state}
            name={"state"}
            onChange={handleInput}
            label="Estado"
            placeholder="Estado"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <Button
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            onClick={createAddres}
          >
            Salvar
          </Button>
        </form>
      </AddressContainer>
    </ThemeProvider>
  );
}

export default AddAddressPage;
