import React from "react";
import { useEffect, useState } from "react";
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Manisha1998-singh")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center m-4 bg-grey-600  p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="User Avatar" className="" />
      </div>
    </>
  );
}
export default Github;
