import React, { Component } from "react";
import { Rings } from "react-loader-spinner";

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <Rings color="#00BFFF" height={70} width={70} />
      </div>
    );
  }
}

export default Loader;
