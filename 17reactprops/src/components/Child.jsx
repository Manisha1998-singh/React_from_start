import React from "react";

function Child({ person, size = 100, color, married, ...props }) {
  {
    /* we can use above way of props when we use login aur want to display something on screen otherwise we can use spread operators*/
  }
  return (
    <div>
      <div
        person={person}
        size={size}
        color={color}
        married={married}
        style={{ backgroundColor: "pink" }}>
        We can write props like this as well, but it makes our code repetitive.
        We can also declare the entire props object as an argument and use it in
        our component with the spread operator.
      </div>

      {/* We can also use the spread operator to prevent code repetition like in the above code */}
      <div {...props} style={{ backgroundColor: "lightgreen" }}>
        dont use too much because its create issues in our project. We can also
        use the spread operator to prevent code repetition like in the above
        example.
      </div>
    </div>
  );
}

export default Child;
