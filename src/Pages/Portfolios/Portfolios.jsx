import React from "react";
import Portfolio from "./Portfolio";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import "./Portfolio.css";
const post = {
  title: "Company Name",
  message: "about company",
  tags: ["tag1", "tag2", "tag3"],
};
function Portfolios() {
  const classes = useStyles();
  return (
    <div>
      <h1>portfolios</h1>
      <div className='portfolio-container'>
        <Portfolio post={post} />
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
