import React, { useEffect, useState } from "react";
import ProductDetail from "../../components/CartSection/ProductDetail";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";
import {
  ContainerTitle,
  Title,
  RestaurantImg,
  ContainerImg,
  ContainerAll,
  RestaurantName,
  GrayTitle,
  ContainerInfos,
  Principal,
  TextPrincipal,
} from "./styles";

function RestaurantPage() {
  const pathParams = useParams();
  const [productsCat, setProductsCat] = useState([]);
  const [restaurant, setRestaurant] = useState("");
  const [category, setCategory] = useState("");

  const getRestaurantDetail = () => {
    const request = axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${pathParams.id}`,
      {
        headers: {
          auth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9hNnlRTm56RXN6YUlYbndMSEhOIiwibmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTMxLjMxMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4geHh4eCBCcmF6LCAxNzM3IC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwMTkyNTk5NX0.WSyb9hsFmfaTSu_icgzWzeUudwsSmbM0Bol9Ll7keUs",
        },
      }
    );
    request
      .then((response) => {
        setProductsCat(response.data.restaurant.products);
        setRestaurant(response.data.restaurant);
        console.log(response.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const jaVisto = {};

  const arrayFiltrado = productsCat.filter((item) => {
    return jaVisto.hasOwnProperty(item.category)
      ? false
      : (jaVisto[item.category] = true);
  });

  console.log(arrayFiltrado);

  return (
    <ContainerAll>
      <ContainerTitle>
        <Title>Restaurante</Title>
      </ContainerTitle>
      <ContainerImg>
        <RestaurantImg src={restaurant.logoUrl} />
      </ContainerImg>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <GrayTitle>{restaurant.category}</GrayTitle>
      <ContainerInfos>
        <GrayTitle>{restaurant.deliveryTime} min</GrayTitle>
        <GrayTitle>Frete R${restaurant.shipping},00</GrayTitle>
      </ContainerInfos>
      <GrayTitle>{restaurant.address}</GrayTitle>

      {/* Categorias */}
      {arrayFiltrado.map((item) => {
        return (
          <Principal>
            <TextPrincipal>{item.category}</TextPrincipal>
          </Principal>
        );
      })}

      {/* <ProductDetail /> */}
    </ContainerAll>
  );
}

export default RestaurantPage;
