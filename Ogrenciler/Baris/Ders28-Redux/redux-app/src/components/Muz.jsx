import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    muz: state.muz,
  };
};
const Muz = (props) => {
  return (
    <div>
      <h1>Muz</h1>
      <h2>Sayı:{props.muz}</h2>
      <button onClick={() => props.dispatch({ type: "EKLE" })}>
        MUZ BUTTON Artır
      </button>
      <button onClick={() => props.dispatch({ type: "CIKAR" })}>
        MUZ BUTTON Azalt
      </button>
    </div>
  );
};

export default connect(mapStateToProps, null)(Muz);
