import React, { useState, useEffect } from "react";
import axios from "axios";

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
import LinearProgress from "@material-ui/core/LinearProgress";

import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";

import Link from "@material-ui/core/Link";

function ProfilePage() {
  const history = useHistory();
  const [orderHistory, setOrderHistory] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getHistory();
    getProfile();
  }, []);

  /* dados do pefil */
  const getProfile = () => {
    const request = axios.get(`${BASE_URL}profile`, {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
      },
    });
    request
      .then((response) => {
        console.log(response.data, "dados de profile");
        setProfile(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* historico de pedidos */
  const getHistory = () => {
    const request = axios.get(`${BASE_URL}orders/history`, {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
      },
    });
    request
      .then((response) => {
        console.log(response.data, "dados de pedidos");
        setOrderHistory(response.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(orderHistory);

  return (
    <>
      <Container>
        <Title>Meu Perfil</Title>
      </Container>

      {profile === null && (
        <p>
          <LinearProgress color="secondary" />
        </p>
      )}

      {profile !== null && (
        <DataProfile>
          <Link href={"/editProfile"} color={"textPrimary"}>
            <ContainerIcon>
              <span>{profile.name}</span>
              <CreateOutlinedIcon />
            </ContainerIcon>

            <span>{profile.email}</span>
            <span>{profile.cpf}</span>
          </Link>
        </DataProfile>
      )}

      {profile !== null && (
        <ContainerAddress>
          <Link href={"/editaddress"} color={"textPrimary"}>
            <TitleAddress>Endereço cadastrado</TitleAddress>

            <ContainerIconAddres>
              <Address>{profile.address}</Address>
              <CreateOutlinedIcon />
            </ContainerIconAddres>
          </Link>
        </ContainerAddress>
      )}

      <Historico>
        <HistoricoP>Histórico de pedidos</HistoricoP>
      </Historico>

      {orderHistory === null && (
        <p>
          <LinearProgress color="secondary" />
        </p>
      )}

      {orderHistory === null && (
        <Messagem>Você não realizou nenhum pedido</Messagem>
      )}

      {orderHistory !== null &&
        orderHistory.map((item) => {
          return (
            <CardBox>
              <ContainerInfos>
                <ProductName>{item.restaurantName}</ProductName>
                <ProductTitle>{item.createdAt}</ProductTitle>
                <ProductPrice>Subtotal R$ {item.totalPrice}</ProductPrice>
              </ContainerInfos>
            </CardBox>
          );
        })}

      {/*  {orderHistory !== null && (

        <CardBox>
          <ContainerInfos>
            <ProductName>{orderHistory.restaurantName}</ProductName>
            <ProductTitle>23 de outubro 2019</ProductTitle>
            <ProductPrice>Subtotal R$ 89,00</ProductPrice>
          </ContainerInfos>
        </CardBox>
      )}
 */}
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
