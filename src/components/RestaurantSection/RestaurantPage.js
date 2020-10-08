import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

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
  ContainerProduct,
} from "./styles";

import { goToFeed } from "../../router/goToPages";

function RestaurantPage() {
  const history = useHistory();
  const pathParams = useParams();
  const [products, setProducts] = useState([]);
  const [restaurant, setRestaurant] = useState("");

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
        setProducts(response.data.restaurant.products);
        setRestaurant(response.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const propertyRepeat = {};

  const categoryFilter = products.filter((item) => {
    return propertyRepeat.hasOwnProperty(item.category)
      ? false
      : (propertyRepeat[item.category] = true);
  });

  return (
    <ContainerAll>
      <ContainerTitle>
        <ArrowBackIosIcon onClick={() => goToFeed(history)} />
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

      {/* Filtro de categorias mapeados */}

      {categoryFilter.map((item) => {
        // Filtrando elemento por cada categoria
        const productArray = products.filter((element) => {
          return item.category === element.category;
        });

        // Retorno renderizado
        return (
          <ContainerProduct>
            <Principal>
              <TextPrincipal>{item.category}</TextPrincipal>

              {/* mapeando o filtro dos produtos por categoria */}
            </Principal>
            {productArray.map((product) => {
              return (
                <ProductDetail
                  name={product.name}
                  description={product.description}
                  photo={product.photoUrl}
                  price={product.price}
                />
              );
            })}
          </ContainerProduct>
        );
      })}
    </ContainerAll>
  );
}

export default RestaurantPage;
