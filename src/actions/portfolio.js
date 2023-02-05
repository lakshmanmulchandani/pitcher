import {FETCH_ALL, CREATE} from "../constants/actiontypes";

import * as api from "../Api/index.jsx";

export const getPortfolio = () => async (dispatch) => {
  console.log("getposts");
  try {
    const {data} = await api.fetchPortfolios();

    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const createPortfolio = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPortfolio(post);
    console.log(data);
    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
