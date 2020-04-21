import React, { Component } from "react";

export default (CatParts) =>
  class CatBoddy extends Component {

    state = {
      requestId: 0
    }

    onClick = (ev) => {
      const requestId = Math.random().toString(25).substring(10)
      this.setState({requestId});
    }

    render() {
      return (
        <div className="list">
          <button className="btn" onClick={this.onClick}>
            Paw here to get random cats
          </button>
          {<CatParts requestId={this.state.requestId} />}
        </div>
      );
    }
  };
