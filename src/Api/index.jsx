import axios from "axios";
import BACKEND_URL from "../config";

const url = `${BACKEND_URL}/portfolios`;

export const fetchPortfolios = () => axios.get(url);
export const createPortfolio = (newPortfolio) => axios.post(url, newPortfolio);
