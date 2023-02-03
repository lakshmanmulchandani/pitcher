import React from "react";
import {useParams} from "react-router";

function Buy() {
  var id = useParams("id");

  id = id.id;
  console.log(id);
  const dummy = [
    {
      name: "Apples",
      about: "We sell apples",
    },
    {
      name: "Oranges",
      about: "We sell Oranges",
    },
    {
      name: "Bananas",
      about: "We sell Bananas",
    },
  ];

  console.log(dummy[id]);
  return (
    <div>
      Buy
      <div>
        <h2>{dummy[id].name}</h2>
        <h2>{dummy[id].about}</h2>
      </div>
    </div>
  );
}

export default Buy;
