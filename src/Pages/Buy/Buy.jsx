import React from "react";
import {useParams} from "react-router";

function Buy() {
  const profile = useParams("id");
  console.log(profile);
  return (
    <div>
      Buy
      {/* <div>{profile.name}</div> */}
    </div>
  );
}

export default Buy;
