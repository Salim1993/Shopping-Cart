import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Checkout from "./Checkout";
import Store from "./store/Store";
import StreamerJsonFactory from "./streamer/StreamerJsonFactory";

//https://dev.twitch.tv/docs/api/reference#get-followed-streams

//For state managemnt between routes, look below
//https://reactjs.org/docs/context.html or https://stackoverflow.com/questions/49938568/how-to-share-application-state-between-react-router-v4-routes
const Routes = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  const [listOfStreamers, setListOfStreamers] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);

  const getQueryParams = () => {
    const queryString = require('query-string');
    var parsed = queryString.parse(location.hash);
    const parsedToken = parsed.access_token;
    console.log(`I got token of ${parsedToken}`);
    return parsedToken;
  }

  const getTwitchInfo = async (tokenToUse) => {
    const url= "https://api.twitch.tv/helix/streams/followed?user_id=142701659";
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': '1cggof96wxk4k7ggpoe1ig3hq2yzfs',
        'Authorization': `Bearer ${tokenToUse}`
      }
    });
    const json = await response.json();
    const listOfStreamers = StreamerJsonFactory().createStreamerListFromJson(json);
    setListOfStreamers(listOfStreamers);
  }

  const getOath = async () => {
    const url= "https://id.twitch.tv/oauth2/authorize?client_id=1cggof96wxk4k7ggpoe1ig3hq2yzfs&redirect_uri=http://localhost:3000/&response_type=token&scope=user:read:follows user:read:email&state=92qf3wr85gv1u0m99zxviokmcbtjrq";
    window.location.replace(url);
  }

  const addStreamerToCheckout = (streamer) => {
    console.log(`Got streamer with ${streamer.name}`);
  }

  useEffect(() => {
    const tokenFromUrl = getQueryParams();
    if(token === "" && !tokenFromUrl) {
      console.log('Trying to authenticate');
      getOath();
    } else if(token === "" && tokenFromUrl !== "") {
      setToken(tokenFromUrl);
    } 
    if(token !== "") {
      getTwitchInfo(token);
    } else if(tokenFromUrl) {
      getTwitchInfo(tokenFromUrl);
    } else {
      console.log("Error with token.");
    }
  }, []);


  return (
      <Switch>
        <Route exact path="/"
         render={props => <Store {...props} list={listOfStreamers} addStreamer={addStreamerToCheckout} />} />
        <Route path="/checkout"
         render={props => <Checkout {...props} checkoutList={checkoutList}/>} />
      </Switch>
  );
};

export default Routes;