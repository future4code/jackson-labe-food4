import React from "react";

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import CartPage from "../components/CartSection/CartPage";
import Feed from "../components/HomeSection/Feed";
import LoginPage from "../components/LoginSection/LoginPage";
import SignUpPage from "../components/LoginSection/SignUpPage";
import AddAdressPage from "../components/LoginSection/AddAdressPage";
import ProfilePage from "../components/ProfileSection/ProfilePage";
import EditProfile from "../components/ProfileSection/EditProfile";
import EditAdress from "../components/ProfileSection/EditAdress";
import RestaurantPage from "../components/RestaurantSection/RestaurantPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/feed">
          <Feed />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/addadress">
          <AddAdressPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/restaurant">
          <RestaurantPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
