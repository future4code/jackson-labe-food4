import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { theme } from "../../constants/themes";

// Material
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

// Component
import ProductDetail from "./ProductDetail";

const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 140vh;
`;

const BoxInfo = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  height: 14vh;
`;

const TitleBlack = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 20px;
`;

const GrayTitle = styled(TitleBlack)`
  color: #b8b8b8;
  text-align: start;
  margin-left: 1rem;
  margin-bottom: 0;
`;

const InfoAddress = styled(GrayTitle)`
  color: black;
  margin-bottom: 1rem;
`;

const RestaurantName = styled(InfoAddress)`
  color: #e86e5a;
  margin-bottom: 0;
`;

const TaxBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin-left: 1rem;
`;

const SubTotal = styled.div`
  width: 89vw;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const FreteText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

const TotalText = styled(FreteText)`
  font-size: 18px;
  color: #e86e5a;
`;

const SubTotalText = styled(FreteText)`
  font-weight: normal;
`;

const Payment = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
  margin-left: 18px;
`;

const CheckBoxContainer = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;

const LabelCheckBox = styled.label`
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 334px;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 20px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 0;
`;

const useStyles = makeStyles({
  root: {
    width: 350,
  },
});

function CartPage() {
  const classes = useStyles();

  // Estado
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);

  // checbox
  const checkState = () => {
    setChecked(!checked);
  };
  return (
    <BaseFlex>
      <TitleBlack>Meu Carrinho</TitleBlack>
      <BoxInfo>
        <GrayTitle>Endereço de entrega</GrayTitle>
        <InfoAddress>Rua Alessandra Vieira, 42</InfoAddress>
      </BoxInfo>
      <RestaurantName>Bullguer Vila Madalena</RestaurantName>
      <GrayTitle>R. Fradique Coutinho, 1136 - Vila Madalena</GrayTitle>
      <GrayTitle>30 - 45 min</GrayTitle>
      <ProductDetail />
      <ProductDetail />
      <TaxBox>
        <FreteText>Frete R$6,00</FreteText>
      </TaxBox>
      <SubTotal>
        <SubTotalText>SUBTOTAL</SubTotalText>
        <TotalText>R$65,00</TotalText>
      </SubTotal>
      <Payment>
        <SubTotalText>Forma de Pagamento</SubTotalText>
      </Payment>
      <CheckBoxContainer>
        <input type="radio" checked={!checked} onChange={checkState} />
        <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
        <br />
        <input type="radio" checked={checked} onChange={checkState} />
        <LabelCheckBox>Cartão de crédito</LabelCheckBox>
      </CheckBoxContainer>
      <Button>Confirmar</Button>
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
