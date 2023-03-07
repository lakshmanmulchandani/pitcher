import React, {useEffect, useRef} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@material-ui/core/";
import useStyles from "./styles";
import "./Buy.css";

import {ToastCallError, ToastCallSuccess} from "../../ReactToast";

import {io} from "socket.io-client";

// const socket = io("https://pitcherfork.onrender.com");

console.log("outside buy");

const displayStock = (stock) => {
  let div = document.getElementById("stock");
  div.textContent = stock;
};
let socket;
function Buy() {
  const stockRef = useRef("");
  const buyRef = useRef("");

  const handleBuy = () => {
    let buyProd = buyRef.current.value;
    console.log("buyProd", buyProd);
    if (buyProd < 0 || !buyProd) {
      ToastCallError("Enter buyProd ");
      return;
    }

    socket.emit("buy", id, buyProd);
  };

  useEffect(() => {
    socket = io("https://pitcherfork.onrender.com");
    console.log("useeffect");
    socket.on("connect", () => {
      console.log("Socket is connected (frontend)");
    });
    socket.emit("join-room", id);
    socket.emit("getStock", id, (getData) => {
      displayStock(getData);
    });

    socket.on("show-stock", (stock) => {
      console.log("show-stock ", stock);
      displayStock(stock);
    });

    socket.on("stock-empty", () => {
      console.log("stock empty working");
      ToastCallError("stock empty");
    });

    socket.on("successfully-purchased", (purchasedProd) => {
      ToastCallSuccess(`Successfully Purchased ${purchasedProd} product`);
    });

    socket.on("disconnect", function () {
      console.log("Got disconnect!");
      setInterval(() => {
        console.log("set interval");
      }, 5000);
    });
    return () => {
      console.log("socket disconnecg");
      socket.disconnect();
    };
  }, []);

  var id = useParams("id");
  const classes = useStyles();
  const posts = useSelector((state) => state.portfolios);
  id = id.id;
  console.log(id);

  var i = 0;
  while (id != posts[i]._id) {
    i++;
  }
  const profile = posts[i];

  // console.log(dummy[id]);
  return (
    <div className='page-container'>
      <div className='top-section'>
        <div className='title'>{profile.name}</div>
        <img
          src={
            // post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt={profile.name}
        />
      </div>

      <div className='Buy-Container'>
        <div className='Dashboard'>
          <div className='shares'>
            <div className='RemainingShares'>
              <div className='RemainingShares-shape'>5</div>
            </div>
            <div className='RemainingShares-text'>Remaining Stocks</div>
          </div>
          <div className='buy'>
            <div className='buy-input'>
              <input ref={buyRef} type='number' placeholder='Enter quantity' />
            </div>
            <div className='buy-button'>
              <Button variant='contained' color='primary' onClick={handleBuy}>
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
