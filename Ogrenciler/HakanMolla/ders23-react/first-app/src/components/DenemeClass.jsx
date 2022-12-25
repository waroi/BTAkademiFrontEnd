import React, { Component } from 'react'

 class DenemeClass extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
  render() {
    return (
      <div>
        <h2>Deneme Class
            <p>İsim:{this.props.isim}</p>
        </h2>
      </div>
    )
  }
}


export default DenemeClass;