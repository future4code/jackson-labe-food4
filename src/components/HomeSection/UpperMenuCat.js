import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ContainerCat = styled.div`
  display: flex;
`;
const ParagrafCat = styled.p`
  margin: 3px;
  padding: 3px;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

const UpperMenuCat = ({ categories, setInputCategories }) => {
  const renderCategories = () =>
    categories.map((item) => {
      return (
        <ParagrafCat
          key={item}
          onClick={() => {
            setInputCategories(item);
          }}
        >
          {item}
        </ParagrafCat>
      );
    });

  return <ContainerCat>{renderCategories()}</ContainerCat>;
};

export default UpperMenuCat;

UpperMenuCat.propTypes = {
  categories: PropTypes.array,
  setInputCategories: PropTypes.func,
};
