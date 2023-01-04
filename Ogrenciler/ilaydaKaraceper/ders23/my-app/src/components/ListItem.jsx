import React from "react";

export const ListItem = ({ name, color1, color2, width, itemId }) => {
    return <li style={{background: color1, color: color2, width: width}}>{name}{itemId}</li>;
};