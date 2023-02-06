import React from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@material-ui/core/";
import useStyles from "./styles";
import "./Buy.css";
function Buy() {
  var id = useParams("id");
  const classes = useStyles();
  const posts = useSelector((state) => state.portfolios);
  id = id.id;
  console.log(id);

  var i = 0;
  while (id != posts[i]._id) {
    i++;
  }
  const profile = posts[i];
  const dummy = [
    {
      name: "Apples",
      about: "We sell apples",
    },
    {
      name: "Oranges",
      about: "We sell Oranges",
    },
    {
      name: "Bananas",
      about: "We sell Bananas",
    },
  ];

  // console.log(dummy[id]);

  return (
    <div>
      Buy
      <div>
        <h2>{profile.name}</h2>
        <h2>{profile.about}</h2>
      </div>
      <div className='Buy-Container'>
        <div className='info'>
          <Card>
            <div className='title'>{profile.name}</div>
            <CardMedia
              className={classes.media}
              image={
                // post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              title={profile.name}
            />

            <div className='about'>{profile.about}</div>
          </Card>
        </div>

        <div className='Dashboard'>
          <div>
            <div classsName='sharePrice'></div>
            <div classsName='RemainingShares'></div>
          </div>
          <div>
            <div className='No. of shares'></div>
            <div className='Buy shares'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
