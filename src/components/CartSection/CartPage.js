import React, { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetail from "../../components/ProductDetail/ProductDetail"
// Material
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";

// Component

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
  BaseFlexNav,
  ContainerProductCard,
  CardBox,
  BoxImg,
  ContainerInfos,
  ProductName,
  ProductTitle,
  ProductPrice,
  CounterProduct,
  ButtonProduct,
  ButtonDelete
} from "./styles";
import { goToCart, goToFeed, goToProfile } from "../../router/goToPages";
import { useHistory } from "react-router-dom";

function CartPage(props) {
  // Estado
  const [value, setValue] = useState("cart");
  const [checked, setChecked] = useState(false);
  const [order, setOrder] = useState({});
  const [address, setAddress] = useState(null);
  const [infos, setInfos] = useState({});




  const history = useHistory()

  // Edição NavBar
  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "fixed",
      bottom: 0,
    },
  });

  const classes = useStyles();

  // Pegar endereço do cliente

  const getAddress = (props) => {
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

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }

    getOrder();
    getAddress();
  }, []);

  // checbox
  const checkState = () => {
    setChecked(!checked);
  };

  console.log(props.carrinho)


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
     
      {props.carrinho.length === 0 && <EmptyCart>Seu carrinho está vazio!</EmptyCart>}
      {props.carrinho.length > 0 && props.carrinho.map((item) => {
        return (
          <ContainerProductCard>
      {/* Container Produto */}
      <CardBox>
        <BoxImg src={item.image} />

        {/* Container Informações Gerais */}
        <ContainerInfos>
          {/* Infos */}
          
          <CounterProduct>{item.quantidade}</CounterProduct>
          <ProductName>{item.name}</ProductName>
          <ProductTitle>{item.description}</ProductTitle>
          <ProductPrice>R${item.price}</ProductPrice>
          <ButtonDelete>Remover</ButtonDelete>
          
        </ContainerInfos>
      </CardBox>
    </ContainerProductCard>
        )
      })}

      {/* Pagamento */}
      <TaxBox>{props.carrinho === null && <FreteText>Frete R$0,00</FreteText>}</TaxBox>
      <SubTotal>
        <SubTotalText>SUBTOTAL</SubTotalText>
        {/* {props.carrinho === null ? (
          <TotalText>R$0,00</TotalText>
        ) : (
          <TotalText>R${order.totalPrice}</TotalText>
        )} */}
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
      <BaseFlexNav>
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
      </BaseFlexNav>
    </BaseFlex>
  );
}

export default CartPage;
