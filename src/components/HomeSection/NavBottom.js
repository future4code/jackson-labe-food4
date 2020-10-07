import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import { theme } from "./../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { goToCart } from "../../router/goToPages";

const NavBottom = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "fixed",
      bottom: 0,
      marginTop: 40,
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction icon={<HomeOutlinedIcon fontSize="large" />} />
        <BottomNavigationAction
          onClick={() => goToCart(history)}
          icon={<ShoppingCartOutlinedIcon fontSize="large" />}
        />
        <BottomNavigationAction
          icon={<PersonOutlineOutlinedIcon fontSize="large" />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBottom;
