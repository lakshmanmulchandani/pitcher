import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastCallSuccess } from "../../ReactToast";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./History.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import HistoryItem from "./HistoryItem";
import { isLoggedIn } from "../../actions/userActions";

const History = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.entryReducer);
  let cartItems = user && user.buyHistory;

  const checkOutHandler = () => {
    navigate("/portfolios");
  };

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  return (
    <>
      {
        //       cartItems && cartItems.length === 0 ? (
        // <div className="emptyCart">
        //   {/* <RemoveShoppingCartIcon /> */}
        //   <Typography>No Product in Your Cart</Typography>
        //   <Link to="/products">View Products</Link>
        // </div>
        //   ) :
        <div>
          <div className="invest_heading">Your Investment</div>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Startups</p>
              <p>Quantity</p>
              {/* <p>Subtotal</p> */}
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item && item._id}>
                  <HistoryItem item={item} />
                  <div className="cartInput">
                    {/* <input type="number" value={item.quantity} readOnly /> */}
                    {item && item.boughtStock}
                  </div>
                  {/* <div className="cartSubtotal">{`${
                  item.price * item.quantity
                } Rs.`}</div> */}
                </div>
              ))}

            <div className="cartGrossTotal">
              <div></div>
              <div className="cartGrossTotalBox">
                <p>Gross Total</p>
                <p>{`${
                  cartItems &&
                  cartItems.reduce((accum, item) => accum + item.boughtStock, 0)
                } Rs.`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkOutHandler}>Back to Buying</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default History;
