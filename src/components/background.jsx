import React, { Component } from "react";
import QuoteBox from "./quoteBox";

class Background extends Component {
  state = {};
  render() {
    return (
      <div id="background">
        <QuoteBox />
        <p>by Guilherme Sartori</p>
      </div>
    );
  }
}

export default Background;
