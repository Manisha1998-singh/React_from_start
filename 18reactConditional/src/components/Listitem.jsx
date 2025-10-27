import React from "react";

function Listitem({ name, isPacked }) {
  //we use ternary operator for to follow the dont repeat yourself rule.
  //<li className="item">{isPacked ? name + " ✅" : name}</li>;

  return (
    <li className={isPacked ? "item" : "itempack"}>
      {" "}
      {name} {isPacked && "✅"}
    </li>
    //above code is used when i want to use classes on condition and also want to follow DRY rule
  );

  // if i want to add different classes based on CSS ConditionRule.
}

export default Listitem;
