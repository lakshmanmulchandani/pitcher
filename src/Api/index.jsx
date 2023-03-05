import axios from "axios";

const url = "https://pitcherfork.onrender.com/portfolios";
// const url = "http://localhost:5000/portfolios";

export const fetchPortfolios = () => axios.get(url);
export const createPortfolio = (newPortfolio) => axios.post(url, newPortfolio);
