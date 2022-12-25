import React from 'react'

const Deneme = (props) => {
  return (
    <div>
        <h2>Bu bir deneme componenti {props.a}</h2>
        <p>Merhaba {props.isim}</p>
    </div>
  )
}

export default Deneme;
