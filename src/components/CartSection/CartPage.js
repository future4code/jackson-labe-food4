import React, { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
// Material
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControl from "@material-ui/core/FormControl";


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
  ButtonDelete,
  InputCheck
} from "./styles";
import { goToCart, goToFeed, goToProfile } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import {useForm} from "../../services/useForm"

function CartPage(props) {
  // Estado
  const [value, setValue] = useState("cart");
  const [checked, setChecked] = useState(false);
  const [address, setAddress] = useState(null);


  const { form, onChange, resetState } = useForm({
    pagamento: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };



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
        setAddress(response.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }

    getAddress();
  }, []);

  // checbox
  const checkState = () => {
    setChecked(!checked);
  };

  const productsArray = () =>{
    props.carrinho.map((item) => {
      return {
        id: item.id,
        quantity: item.quantidade
      }
    })
  }

  const placeOrder = () => {
    const body = {
      products: productsArray,
      paymentMethod: form.pagamento
    }

    const request = axios.post(`"https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${props.restaurant.id}/order`)
  }

  // remove item do carrinho
  const removeItemOnCart = (id) => {
    const cart = [...props.carrinho]

    const cartWithoutItem = cart.filter((item) => {
      return id !== item.id
    })

    props.setCarrinho(cartWithoutItem)

  }

  console.log(form.pagamento)
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
      {props.carrinho.length > 0 && <div><RestaurantName>{props.restaurant.name}</RestaurantName>
      <GrayTitle>{props.restaurant.address}</GrayTitle>
      <GrayTitle>{props.restaurant.deliveryTime}min</GrayTitle></div>}
      


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
          <ButtonDelete onClick={() => removeItemOnCart(item.id)}>Remover</ButtonDelete>
          
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
      <FormControl onSubmit={handleSubmit}>

      <CheckBoxContainer>

        <InputCheck type="radio" checked={!checked} onChange={handleInputChange} name="money" value="money"/>
        <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
        <br />
        <InputCheck type="radio" checked={checked} onChange={handleInputChange} name="creditcard" value="creditcard"/>
        <LabelCheckBox>Cartão de crédito</LabelCheckBox>
        {/* Button */}
      <Button type="submit">Confirmar</Button>
      </CheckBoxContainer>
      </FormControl>


      

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
