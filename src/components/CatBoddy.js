import React, { Component } from "react";
import catRequest from "../network/catRequest";

export default (CatParts) =>
// TODO: move to custom HOOK
  class CatBoddy extends Component {
    state = {
      catList: [],
      requestId: 0,
    };

    async componentDidMount() {
      const data = await catRequest(9);

      this.setState({ catList: data });
    }

    // This is done for educational purposes, yes, I know it is not the best use case
    async componentDidUpdate(prevProps, prevState) {
      if (prevState.requestId !== this.state.requestId) {
        const data = await catRequest(9);
        this.setState({ catList: data });
      }
    }

    // Class Fields
    onClick = (ev) => {
      const requestId = Math.random().toString(25).substring(10);
      this.setState({ requestId });
    }

    render() {
      return (
        <div className="list">
          <button className="btn" onClick={this.onClick}>
            Paw here to get random cats
          </button>
          {
            <CatParts
              requestId={this.state.requestId}
              catList={this.state.catList}
            />
          }
        </div>
      );
    }
  };
