import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  DataProfile,
  ContainerIcon,
  ContainerAddress,
  TitleAddress,
  Address,
  ContainerIconAddres,
  Historico,
  Messagem,
  HistoricoP,
  BaseFlex,
} from "./styles";

import { theme } from "../../constants/themes";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { useHistory } from "react-router-dom";

import Link from "@material-ui/core/Link";
import {
  goToAddAdress,
  goToFeed,
  goToCart,
  goToProfile,
} from "../../router/goToPages";

function ProfilePage() {
  const history = useHistory();
  const [value, setValue] = useState("profile");

  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "fixed",
      bottom: 0,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }
  }, [])  

  return (
    <>
      <Container>
        <Title>Meu Perfil</Title>
      </Container>
      <DataProfile>
        <Link href={"/addaddress"} color={"textPrimary"}>
          <ContainerIcon>
            <span>Bruna Oliveira</span>
            <CreateOutlinedIcon />
          </ContainerIcon>

          <span>bruna_o@gmail.com</span>
          <span>333.333.333-33</span>
        </Link>
      </DataProfile>

      <ContainerAddress>
        <Link href={"/addaddress"} color={"textPrimary"}>
          <TitleAddress>Endereço cadastrado</TitleAddress>

          <ContainerIconAddres>
            <Address>Rua Alessandra Vieira, 42 - Santana</Address>
            <CreateOutlinedIcon />
          </ContainerIconAddres>
        </Link>
      </ContainerAddress>

      <Historico>
        <HistoricoP>Histórico de pedidos</HistoricoP>
      </Historico>
      <Messagem>Você não realizou nenhum pedido</Messagem>

      <BaseFlex>
        <ThemeProvider theme={theme}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              value="home"
              icon={
                <HomeOutlinedIcon
                  fontSize="large"
                  onClick={() => goToFeed(history)}
                />
              }
            />
            <BottomNavigationAction
              value="cart"
              icon={
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  onClick={() => goToCart(history)}
                />
              }
            />
            <BottomNavigationAction
              value="profile"
              icon={
                <PersonOutlineOutlinedIcon
                  fontSize="large"
                  onClick={() => goToProfile(history)}
                />
              }
            />
          </BottomNavigation>
        </ThemeProvider>
      </BaseFlex>
    </>
  );
}

export default ProfilePage;
