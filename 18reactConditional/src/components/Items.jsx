import React from "react";

function Items({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  } else {
    return <li className="item">{name}</li>;
  }
}

export default Items;
