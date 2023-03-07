import React from "react";
import Portfolio from "./Portfolio";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import "./Portfolio.css";
import {useSelector} from "react-redux";
import {getPortfolio} from "../../actions/portfolio";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { isLoggedIn } from "../../actions/userActions";

const post = {
  title: "Company Name",
  message: "about company",
  tags: ["tag1", "tag2", "tag3"],
};

function Portfolios() {
  const classes = useStyles();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolio());
    dispatch(isLoggedIn());
  }, []);

  return !posts.length ? (
    <div className='portfolio-container'>
      <h1>Portfolios</h1>
    </div>
  ) : (
    <div className='portfolio-container'>
      {" "}
      <h1>Portfolios</h1>
      {posts.map((post) => (
        <div className='card-div' onClick={() => navigate(`Buy/${post._id}`)}>
          <Portfolio post={post} />
        </div>
      ))}
    </div>
  );
}

export default Portfolios;
