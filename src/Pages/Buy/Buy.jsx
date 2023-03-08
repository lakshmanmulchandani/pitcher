import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {getPortfolio} from "../../actions/portfolio";
import {useParams, useNavigate} from "react-router";
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
import Navbar from "../../Components/Navbar/Navbar.jsx";

import {ToastCallError, ToastCallSuccess} from "../../ReactToast";

import {io} from "socket.io-client";

// const socket = io("https://pitcherfork.onrender.com");
// http://localhost:5000

console.log("outside buy");

const displayStock = (stock) => {
  let div = document.getElementById("stock");
  div.textContent = stock;
};

const displayUserStock = (stock) => {
  let div = document.getElementById("userStock");
  div.textContent = stock;
};
let socket;
let userId;
function Buy() {
  const navigate = useNavigate();
  const stockRef = useRef("");
  const buyRef = useRef("");

  const handleBuy = () => {
    let buyProd = buyRef.current.value;
    console.log("buyProd", buyProd);
    if (buyProd < 0 || !buyProd) {
      ToastCallError("Enter buyProd ");
      return;
    }

    socket.emit("buy", id, userId, buyProd);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    socket = io("https://pitcherfork.onrender.com");
    // socket = io("http://localhost:5000");
    console.log("useeffect");

    userId = localStorage.getItem("icell_pitcher_userId")
      ? JSON.parse(localStorage.getItem("icell_pitcher_userId"))
      : null;
    console.log(userId);
    socket.on("connect", () => {
      console.log("Socket is connected (frontend)");
    });
    socket.emit("join-room", id);
    socket.emit("getStock", id, userId, (getData) => {
      displayStock(getData[0]);
      displayUserStock(getData[1]);
    });

    socket.on("show-stock", (stock) => {
      console.log("show-stock ", stock);
      displayStock(stock[0]);
    });
    socket.on("show-userStock", (stock) => {
      displayUserStock(stock[1]);
    });

    socket.on("stock-empty", () => {
      console.log("stock empty working");
      ToastCallError("stock empty");
    });
    socket.on("userStock-empty", () => {
      console.log("stock empty working");
      ToastCallError("Dont have enough Stock ");
    });

    socket.on("successfully-purchased", (purchasedProd) => {
      ToastCallSuccess(`Successfully Purchased ${purchasedProd} product`);
    });

    socket.on("disconnect", function () {
      console.log("Got disconnect!");
      // setInterval(() => {
      //   console.log("set interval");
      // }, 5000);
      navigate("/portfolios");
    });
    return () => {
      console.log("socket disconnecg");
      socket.disconnect();
    };
  }, []);

  var id = useParams("id");
  const classes = useStyles();
  var posts = useSelector((state) => state.portfolios);
  useEffect(() => {
    dispatch(getPortfolio());
  }, []);

  id = id.id;

  var profile;
  if (posts.length != 0) {
    var i = 0;
    while (id != posts[i]._id) {
      i++;
    }
    profile = posts[i];
  } else {
    profile = {
      name: "test",
    };
  }
  // console.log(dummy[id]);
  return (
    <>
      <Navbar socket={socket} />
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
                <div className='RemainingShares-shape' id='stock'>
                  5
                </div>
              </div>
              <div className='RemainingShares-text'>Remaining Stocks</div>
            </div>
            {/* <div className='shares'>
            <div className='RemainingShares'>
              <div className='RemainingShares-shape' id='userStock'>
                5
              </div>
            </div>
            <div className='RemainingShares-text'>User Remaining Stocks</div>
          </div> */}
            <div className='buy'>
              <div className='buy-input'>
                <input
                  ref={buyRef}
                  type='number'
                  placeholder='Enter quantity'
                />
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
    </>
  );
}

export default Buy;
