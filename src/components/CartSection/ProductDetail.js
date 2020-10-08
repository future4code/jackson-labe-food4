import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

const ButtonDelete = styled.button`
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
`;

function ProductDetail(props) {
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
          <ButtonDelete>Adicionar</ButtonDelete>
        </ContainerInfos>
      </CardBox>
    </Container>
  );
}

export default ProductDetail;
