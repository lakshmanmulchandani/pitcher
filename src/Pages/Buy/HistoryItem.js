import React from "react";
import { Link } from "react-router-dom";

import "./HistoryItem.css";

const startups = {
  "641f0e60a12eab550444f4f4": "Fire Squall",
  "641f0f0aa12eab550444f529": "Digital Stethoscope",
  "641f0f3ca12eab550444f52b": "Air Dribble",
  "641f0f7da12eab550444f52d": "Gamematic",
  "641f102ca12eab550444f53a": "Mommy's",
  "641f10c2a12eab550444f53c": "Tinyfirms",
  "641f1102a12eab550444f53e": "HomeHelper",
  "641f1169a12eab550444f540": "Digitron Kids",
  "641f121ea12eab550444f547": "IMEAD",
  "641f48eea12eab550444fffb": "Aut-w",
};

const HistoryItem = ({ item }) => {
  let itemName = item && item.portfolio_id;
  return (
    <div className="CartItemCard">
      {/* <img src={item.image} alt="ssa" /> */}
      <div>
        <div>{startups[itemName]}</div>
        {/* <span>{`Price : ${item.price} Rs.`}</span> */}
      </div>
    </div>
  );
};

export default HistoryItem;
