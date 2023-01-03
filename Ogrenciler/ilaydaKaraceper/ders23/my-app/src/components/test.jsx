import React from 'react'
import ProtoTypes from "prop-types";

const Test = ({ isim, baslik, id}) => {
    return(
        <div>
        Bu bir component {isim} {baslik} {id}
        </div>
    );
};

Test.proTypes = {
    isim: ProtoTypes.string.isRequired,
    baslik: ProtoTypes.string,
    id: ProTypes.number,
};

Test.defaultPromps = {
    isim: "Bilgi Girilmedi",
    baslik: "Bilgi Girilmedi",
    id: 0,
};

export default Test;
