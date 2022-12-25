import React from "react";
import PropTypes from "prop-types";

const Test = ({ isim, baslik, id }) => {
  return (
    <div>
      Bu bir component {isim} {baslik} {id}
    </div>
  );
};

Test.propTypes = {
  isim: PropTypes.string.isRequired,
  baslik: PropTypes.string,
  id: PropTypes.number,
};

Test.defaultProps = {
  isim: "Bilgi Girilmedi",
  baslik: "Bilgi Girilmedi",
  id: 0,
};

export default Test;
