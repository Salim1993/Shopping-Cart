import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./header/Header";
import Store from "./Store";

//https://gamedev.stackexchange.com/questions/69058/how-can-i-fetch-a-list-of-games-and-dlc-for-a-user-via-steams-api

//https://dev.twitch.tv/docs/api/reference#get-followed-streams

//Client id: 1cggof96wxk4k7ggpoe1ig3hq2yzfs
const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;