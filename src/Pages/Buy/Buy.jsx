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
import BACKEND_URL from "../../config";

console.log("outside buy");

const displayStock = (stock) => {
  let div = document.getElementById("stock");
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
    if (!buyProd || buyProd <= 0) {
      ToastCallError("Invalid Input");
      return;
    }

    socket.emit("buy", id, userId, buyProd);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    socket = io(BACKEND_URL);
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
    });

    socket.on("show-stock", (stock) => {
      console.log("show-stock ", stock);
      displayStock(stock[0]);
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
      ToastCallSuccess(`Successfully Purchased ${purchasedProd} stocks`);
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
              profile.selectedFile ||
              "https://img.freepik.com/premium-vector/abstract-business-logo-letter-n-vector-logo-template_740796-817.jpg"
            }
            alt={profile.name}
          />
        </div>

        <div className='Buy-Container'>
          <div className='Dashboard'>
            <div className='shares'>
              <div className='RemainingShares'>
                <div className='RemainingShares-shape' id='stock'>
                  100
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
