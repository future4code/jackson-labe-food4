import React, { useState, useEffect } from "react";
import useRequestData from "../../services/useRequestData";
import RestaurantsCards from "./RestaurantsCards";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import UpperMenuCat from "./UpperMenuCat";

import styled from "styled-components";

import {
  ExtDivCarousel,
  DivItem,
  MediumTitle,
  InsideDiv,
  InsideDivScroll,
  Body,
  DivContent,
} from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80vw",
    },
  },
}));

const TitleCompany = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const BoxTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100vw;
  margin-bottom: 1rem;
`;

const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const Feed = () => {
  const getRestaurant = useRequestData([], "restaurants");
  const classes = useStyles();

  const [inputRestaurant, setInputRestaurant] = useState("");
  const [inputCategories, setInputCategories] = useState("");
  const [categories, setCategories] = useState([]);

  const handleInput = (e) => {
    setInputRestaurant(e.target.value.toLowerCase());
  };

  const getCategories = () => {
    getRestaurant.map((item) => {
      let hasCat = false;
      categories.map((cat) => {
        if (cat === item.category) {
          hasCat = true;
        }
      });
      if (hasCat === false) {
        let categoriesArray = [...categories, item.category];
        setCategories(categoriesArray);
      }
    });
  };

  getCategories();

  const renderCards = () =>
    getRestaurant
      .filter((item) => {
        return item.category.indexOf(inputCategories) >= 0;
      })
      .filter((item) => {
        return item.name.toLowerCase().indexOf(inputRestaurant) >= 0;
      })
      .map((item) => {
        return <RestaurantsCards key={item.id} item={item} />;
      });

  return (
    <div>
      <BoxTitle>
        <TitleCompany>Rappi4</TitleCompany>
      </BoxTitle>
      <BaseFlex>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Restaurantes"
            variant="outlined"
            onChange={handleInput}
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        </form>

        {/* Carrosel */}

        <Body>
          <ExtDivCarousel>
            <DivItem className="item">
              <InsideDiv>
                <DivContent>
                  <UpperMenuCat
                    setInputCategories={setInputCategories}
                    categories={categories}
                  />
                </DivContent>
              </InsideDiv>
              <InsideDivScroll></InsideDivScroll>
            </DivItem>
          </ExtDivCarousel>
        </Body>
        {renderCards()}
      </BaseFlex>
    </div>
  );
};

export default Feed;
