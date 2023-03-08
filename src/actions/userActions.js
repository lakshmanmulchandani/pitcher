import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/userConstats";

import BACKEND_URL from "../config";

import axios from "axios";
const url = BACKEND_URL;
// const url = "http://localhost:5000";

// LOGOIN
export const login = (code, name) => async (dispatch) => {
  try {
    dispatch({type: LOGIN_REQUEST});
    console.log("login action outgoing");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {data} = await axios.post(
      url + "/api/v1/login",
      {code, name},
      config
    );
    console.log("login action data XYZ : ", data);

    dispatch({type: LOGIN_SUCCESS, payload: data.user});
    console.log(data.token);
    localStorage.setItem("icell_pitcher_code", JSON.stringify(data.token));
    localStorage.setItem("icell_pitcher_userId", JSON.stringify(data.userId));
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
  }
};

// LOGOIN
export const isLoggedIn = () => async (dispatch) => {
  try {
    dispatch({type: LOGIN_REQUEST});
    console.log("login action outgoing");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let y = localStorage.getItem("icell_pitcher_code")
      ? JSON.parse(localStorage.getItem("icell_pitcher_code"))
      : null;
    console.log(y);

    const {data} = await axios.post(
      url + "/api/v1/is_logged_in",
      {token: y},
      config
    );

    console.log("islogin action data : ", data);

    dispatch({type: LOGIN_SUCCESS, payload: data.user});
    console.log(data.token);
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
  }
};
