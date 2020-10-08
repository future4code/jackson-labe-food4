import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { createMuiTheme } from "@material-ui/core/styles";
import { useForm } from "../../services/useForm";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 1rem;
`;

const CardBox = styled.div`
  width: 90vw;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  height: 112px;
`;

const BoxImg = styled.img`
  width: 97px;
  height: 113px;
`;

const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding-top: 12px;
  position: relative;
  width: 100vw;
`;

const ProductName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #e86e5a;
  margin: 0 0 6px 0;
  font-size: 1rem;
  width: 50vw;
`;

const ProductTitle = styled.p`
  color: #b8b8b8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-size: 0.875rem;
  margin: 0 0 6px 0;
`;

const ProductPrice = styled(ProductName)`
  color: black;
  margin-bottom: 15px;
`;

const CounterProduct = styled.div`
  width: 33px;
  height: 33px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

const ButtonProduct = styled.button`
  padding: 5px;
  width: 25vw;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background: none;
  position: absolute;
  bottom: 0;
  right: 0;

  &:focus {
    outline: none;
  }
`;

export const BaseModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  width: 90vw;
  height: 50vw;
  background: white;
`;

export const ModalTitle = styled.p`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    fontWeight: "regular",
  },

  root: {
    width: 250,
  },

  margin: {
    marginTop: 20,
  },
}));

function ProductDetail(props) {
  // edit material-ui
  const classes = useStyles();

  // modal style
  const [modalStyle] = useState(getModalStyle);

  // state open/close modal
  const [open, setOpen] = useState(false);

  // color theme to select
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#e86e5a",
      },
    },
  });

  // open/close modal functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form hook
  const { form, onChange, resetState } = useForm({
    quantidade: 0,
  });

  // handleSubmit pra não atualizar a page.
  const handleSubmit = (event) => {
    event.preventDefault();
    resetState();
  };

  // onChange select.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  // modal body
  const body = (
    // Container Modal
    <ModalContainer style={modalStyle} className={classes.paper}>
      {/* Title Modal */}
      <ModalTitle>Selecione a quantidade desejada</ModalTitle>

      {/* Select Modal */}
      <ThemeProvider theme={theme}>
        <FormControl onSubmit={handleSubmit} variant="outlined" color="primary">
          <InputLabel htmlFor="outlined-age-native-simple">
            Quantidade
          </InputLabel>
          <Select
            value={form.quantidade}
            className={classes.root}
            label="Quantidade"
            name="quantidade"
            onChange={handleInputChange}
            required
          >
            {/* Options */}
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Select>
          <Button type="submit" color="primary" className={classes.margin}>
            adicionar ao carrinho
          </Button>
        </FormControl>
      </ThemeProvider>
    </ModalContainer>
  );

  return (
    <Container>
      {/* Container Produto */}
      <CardBox>
        <BoxImg src={props.photo} />

        {/* Container Informações Gerais */}
        <ContainerInfos>
          {/* Infos */}
          <CounterProduct>0</CounterProduct>
          <ProductName>{props.name}</ProductName>
          <ProductTitle>{props.description}</ProductTitle>
          <ProductPrice>R${props.price}</ProductPrice>
          <ButtonProduct type="button" onClick={handleOpen}>
            Adicionar
          </ButtonProduct>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </ContainerInfos>
      </CardBox>
    </Container>
  );
}

export default ProductDetail;
