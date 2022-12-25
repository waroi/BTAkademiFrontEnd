import React, { Component } from "react";

class DenemeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Varol",
    };
  }
  render() {
    return (
      <div>
        <h2>Deneme Class</h2>
        <p>
          İsim: {this.props.isim} {this.state.text}
        </p>
      </div>
    );
  }
}

export default DenemeClass;
