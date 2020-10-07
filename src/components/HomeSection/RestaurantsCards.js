import React from "react";
import {
  BoxCard,
  BoxInside,
  ImgBox,
  RestaurantName,
  ContainerInfos,
  InfoText,
} from "./styles";

export default function RestaurantsCards({ item }) {
  const {
    id,
    name,
    description,
    deliveryTime,
    logoUrl,
    address,
    shipping,
  } = item;
  return (
    <BoxCard key={id}>
      <BoxInside>
        <ImgBox src={logoUrl} />
        <RestaurantName>{name}</RestaurantName>
        <ContainerInfos>
          <InfoText>{deliveryTime}min</InfoText>
          <InfoText>Frete R${shipping},00</InfoText>
        </ContainerInfos>
      </BoxInside>
    </BoxCard>
  );
}
