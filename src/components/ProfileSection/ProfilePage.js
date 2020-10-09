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
  CardBox,
  ContainerInfos,
  ProductName,
  ProductTitle,
  ProductPrice,
    BaseFlex,
} from "./styles";

//Material ui

import { theme } from "../../constants/themes";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinearProgress from "@material-ui/core/LinearProgress";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";

import {
  goToEditAddress, goToEditProfile,
  goToFeed,
  goToCart,
  goToProfile,
} from "../../router/goToPages";


function ProfilePage() {
  const [orderHistory, setOrderHistory] = useState(null);
  const [profile, setProfile] = useState(null);
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
            <ContainerIcon>
              <span>{profile.name}</span>
              <CreateOutlinedIcon onClick={() => goToEditProfile(history) }/>
            </ContainerIcon>

            <span>{profile.email}</span>
            <span>{profile.cpf}</span>
        </DataProfile>
      )}

      {profile !== null && (
        <ContainerAddress>
            <TitleAddress>Endereço cadastrado</TitleAddress>

            <ContainerIconAddres>
              <Address>{profile.address}</Address>
              <CreateOutlinedIcon onClick={() => goToEditAddress(history)}/>
            </ContainerIconAddres>
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
