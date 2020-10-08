import React from "react";
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
  ContainerFooter,
  CardBox,
  ContainerInfos,
  ProductName,
  ProductTitle,
  ProductPrice,
} from "./styles";

//Material ui
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";

import Link from "@material-ui/core/Link";

function ProfilePage() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Title>Meu Perfil</Title>
      </Container>
      <DataProfile>
        <Link href={"/editProfile"} color={"textPrimary"}>
          <ContainerIcon>
            <span>Bruna Oliveira</span>
            <CreateOutlinedIcon />
          </ContainerIcon>

          <span>bruna_o@gmail.com</span>
          <span>333.333.333-33</span>
        </Link>
      </DataProfile>

      <ContainerAddress>
        <Link href={"/editaddress"} color={"textPrimary"}>
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

      <CardBox>
        <ContainerInfos>
          <ProductName>Burger Vila Madalena</ProductName>
          <ProductTitle>23 de outubro 2019</ProductTitle>
          <ProductPrice>Subtotal R$ 89,00</ProductPrice>
        </ContainerInfos>
      </CardBox>

      <ContainerFooter>
        <Link href={"/feed"} color={"textPrimary"}>
          <BottomNavigationAction
            icon={<HomeOutlinedIcon fontSize="large" />}
          />
        </Link>

        <Link href={"/cart"} color={"textPrimary"}>
          <BottomNavigationAction
            icon={<ShoppingCartOutlinedIcon fontSize="large" />}
          />
        </Link>

        <Link href={"/profile"} color={"textPrimary"}>
          <BottomNavigationAction
            icon={<PersonOutlineOutlinedIcon fontSize="large" />}
          />
        </Link>
      </ContainerFooter>
    </>
  );
}

export default ProfilePage;
