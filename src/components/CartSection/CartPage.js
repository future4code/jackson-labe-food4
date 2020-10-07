import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { theme } from "../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
import useRequestData from "../../services/useRequestData";

// Material
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";

// Component
import ProductDetail from "./ProductDetail";

// Styled
import {
  BaseFlex,
  TitleBlack,
  BoxInfo,
  GrayTitle,
  InfoAddress,
  RestaurantName,
  TaxBox,
  FreteText,
  SubTotal,
  SubTotalText,
  TotalText,
  Payment,
  CheckBoxContainer,
  LabelCheckBox,
  Button,
  EmptyCart,
} from "./styles";

function CartPage() {
  // Estado
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const [order, setOrder] = useState({});
  const [address, setAddress] = useState(null);
  const [infos, setInfos] = useState({});

  // Edição NavBar
  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "absolute",
      bottom: 0,
      marginLeft: 20,
      marginTop: 20,
    },
  });

  const classes = useStyles();

  // Pegar endereço do cliente

  const getAddress = () => {
    const request = axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address",
      {
        headers: {
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
        },
      }
    );

    request
      .then((response) => {
        console.log(response.data);
        setAddress(response.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Pegar Pedidos

  const getOrder = () => {
    const request = axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/active-order`,
      {
        headers: {
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
        },
      }
    );
    request
      .then((response) => {
        console.log(response.data);
        setOrder(response.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Infos do Restaurante
  const getDetailProduct = () => {
    const request = axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/1",
      {
        headers: {
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
        },
      }
    );

    request
      .then((response) => {
        console.log(response.data.restaurant);
        setInfos(response.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrder();
    getAddress();
    getDetailProduct();
  }, []);

  // checbox
  const checkState = () => {
    setChecked(!checked);
  };

  return (
    <BaseFlex>
      {/* Intro */}
      <TitleBlack>Meu Carrinho</TitleBlack>

      {/* Endereço de Entrega */}

      {address === null && (
        <p>
          <LinearProgress color="secondary" />
        </p>
      )}
      {address !== null && (
        <BoxInfo>
          <GrayTitle>Endereço de entrega</GrayTitle>
          <InfoAddress>
            {address.street}, {address.number}, Cidade: {address.city} -{" "}
            {address.state}, <br />
            {address.neighbourhood}
          </InfoAddress>
        </BoxInfo>
      )}

      {/* Infos do Restaurante */}

      {/* Produtos */}
      {order === null && <EmptyCart>Seu carrinho está vazio!</EmptyCart>}
      {order !== null && (
        <div>
          <RestaurantName>{order.restaurantName}</RestaurantName>
          <GrayTitle>{infos.address}</GrayTitle>
          <GrayTitle>{infos.deliveryTime}min</GrayTitle>
          <ProductDetail />
        </div>
      )}

      {/* Pagamento */}
      <TaxBox>
        <FreteText>Frete R${infos.shipping}</FreteText>
      </TaxBox>
      <SubTotal>
        <SubTotalText>SUBTOTAL</SubTotalText>
        {order === null ? (
          <TotalText>R$0,00</TotalText>
        ) : (
          <TotalText>R${order.totalPrice}</TotalText>
        )}
      </SubTotal>
      <Payment>
        <SubTotalText>Forma de Pagamento</SubTotalText>
      </Payment>

      {/* Checkbox */}
      <CheckBoxContainer>
        <input type="radio" checked={!checked} onChange={checkState} />
        <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
        <br />
        <input type="radio" checked={checked} onChange={checkState} />
        <LabelCheckBox>Cartão de crédito</LabelCheckBox>
      </CheckBoxContainer>

      {/* Button */}
      <Button>Confirmar</Button>

      {/* Botton Nav */}
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
            icon={<HomeOutlinedIcon fontSize="large" />}
          />
          <BottomNavigationAction
            icon={<ShoppingCartOutlinedIcon fontSize="large" />}
          />
          <BottomNavigationAction
            icon={<PersonOutlineOutlinedIcon fontSize="large" />}
          />
        </BottomNavigation>
      </ThemeProvider>
    </BaseFlex>
  );
}

export default CartPage;
