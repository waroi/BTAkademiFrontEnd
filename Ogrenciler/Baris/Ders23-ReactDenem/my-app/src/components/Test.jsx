import React from 'react'
import PropTypes from "prop-types";

const Test = ({name, title,id}) => {
  return (
    <div>
        Bu bir component {name} - {title} - {id}
    </div>
  )
}
Test.propTypes = {
    name : PropTypes.string.isRequired,
    title : PropTypes.string,
    id : PropTypes.number,
}
Test.defaultProps = {
    name : "Bilgi Girilmedi",
    title : "Bilgi Girilmedi",
    id : 0,
}
export default Test