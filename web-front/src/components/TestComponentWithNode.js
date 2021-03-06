import React, { Component } from "react";

export default class TestComponentWithNode extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}
