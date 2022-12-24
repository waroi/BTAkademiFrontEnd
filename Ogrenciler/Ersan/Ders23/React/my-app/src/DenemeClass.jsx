import React, { Component } from "react";

class DenemeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>DenemeClass</h2>
        <p>İsim: {this.props.isim}</p>
      </div>
    );
  }
}

export default DenemeClass;
