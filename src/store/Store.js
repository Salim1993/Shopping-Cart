import React from "react";
import StreamerView from "../streamer/StreamerView";

import "./store.css";

const Store = (props) => {

  const listOfStreamers = props.list;

  const streamerChosen = props.addStreamer
  
  return (
    <div>
      <h1>Store</h1>
      <div id="store">
      {
        listOfStreamers.map(streamer => {
          return <StreamerView key={streamer.name} streamer={streamer} onClickListener={streamerChosen} />
        })
      }
      </div>
    </div>
  );
};

export default Store;