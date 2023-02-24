import React, { useEffect, useRef } from "react";
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


import { io } from "socket.io-client"



const socket = io("http://localhost:5000");


const displayStock = (stock) => {
  let div = document.getElementById("stock");
  div.textContent = stock;
}


function Buy() {
  const stockRef = useRef("");
  const buyRef = useRef("");


const handleBuy = () => {

  let buyProd = buyRef.current.value;
  console.log(buyProd);

  socket.emit("buy", id, buyProd);

  socket.on("show-stock", (stock) => {
      console.log("show-stock ",stock);
      displayStock(stock);
    })
  
}


  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket is connected (frontend)");
      
    });
    socket.emit("join-room", id);
    socket.emit("getStock", id, getData => {
      displayStock(getData)
    });
  
    socket.on("show-stock", (stock) => {
      console.log("show-stock ",stock);
      displayStock(stock);
    })
 
    


  }, [])
  




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
    <div>
      <div className='Buy-Container'>
        <div className='info'>
          <Card>
            <div className='title'>{profile.name}</div>
            <CardMedia
              className={classes.media}
              image={
                // post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              title={profile.name}
            />

            <div className='about'>{profile.about}</div>
          </Card>
        </div>

        <div className='Dashboard'>
          <div>
            <div classsName='sharePrice'></div>
            <div classsName='RemainingShares'></div>
          </div>
          <div>
            <div className='No. of shares'></div>
            <div className='Buy shares'></div>
          </div>
        </div>
      </div>
      <div className="stock_wrapper">
        <div id="stock">7</div>
        <input ref={buyRef} type="number" />
        <button type="submit" onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
}

export default Buy;
