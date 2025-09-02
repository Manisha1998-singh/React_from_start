import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //Commented because instead of this im using loader;

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Manisha1998-singh")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();
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

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/Manisha1998-singh"
  );
  return response.json();
};
