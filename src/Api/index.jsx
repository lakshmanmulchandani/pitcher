import axios from "axios";

// const url = "https://mymemories0809.herokuapp.com/posts";
const url = "http://localhost:5000/Portfolios";

export const fetchPortfolios = () => axios.get(url);
export const createPortfolio = (newPortfolio) => axios.post(url, newPortfolio);
