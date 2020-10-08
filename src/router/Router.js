import React from "react";

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import CartPage from "../components/CartSection/CartPage";
import Feed from "../components/HomeSection/Feed";
import LoginPage from "../components/LoginSection/LoginPage";
import SignUpPage from "../components/LoginSection/SignUpPage";
import AddAddressPage from "../components/AddressSection/AddAddressPage";
import ProfilePage from "../components/ProfileSection/ProfilePage";
import EditProfile from "../components/ProfileSection/EditProfile";
import EditAddress from "../components/ProfileSection/EditAddress";
import RestaurantPage from "../components/RestaurantSection/RestaurantPage";
import SplashScreen from "../components/SplashScreen/SplashScreen";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SplashScreen />
        </Route>

        <Route exact path="/Login">
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

        <Route exact path="/addaddress">
          <AddAddressPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>


        <Route exact path="/EditProfile">
          <EditProfile />
        </Route>
    
        <Route exact path="/restaurant/:id">
          <RestaurantPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
