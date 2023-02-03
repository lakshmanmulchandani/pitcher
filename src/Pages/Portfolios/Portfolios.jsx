import React from "react";
import Portfolio from "./Portfolio";
import Grid from "@material-ui/core/Grid";
import {useNavigate} from "react-router-dom";
import useStyles from "./styles";
import Buy from "../Buy/Buy";
import "./Portfolio.css";
const post = {
  title: "Company Name",
  message: "about company",
  tags: ["tag1", "tag2", "tag3"],
};

function Portfolios() {
  const classes = useStyles();
  const navigate = useNavigate();
  // const id = 5;
  return (
    <div>
      <h1>portfolios</h1>
      <div className='portfolio-container'>
        {/* <div onClick={() => navigate(`Buy/${id}`)}>
          {" "}
          <Portfolio post={post} />
        </div> */}
        <Portfolio post={post} />
        <Portfolio post={post} />

        <Portfolio post={post} />

        <Portfolio post={post} />
        <Portfolio post={post} />
      </div>
    </div>
  );
}

export default Portfolios;
