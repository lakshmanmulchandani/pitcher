import axios from "axios";

// const url = "http://localhost:5000/Portfolios";
const url = "https://pitcherfork.onrender.com/portfolios";

export const fetchPortfolios = () => axios.get(url);
export const createPortfolio = (newPortfolio) => axios.post(url, newPortfolio);
