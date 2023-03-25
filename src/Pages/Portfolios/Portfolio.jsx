import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";

function Portfolio({post}) {
  const classes = useStyles();
  console.log("post is ", post);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://img.freepik.com/premium-vector/abstract-business-logo-letter-n-vector-logo-template_740796-817.jpg"
        }
        title={post.name}
      />
      <div className={classes.details}>
        <Typography
          variant='body2'
          //  color='textSecondary'
          component='h2'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'>
        {post.name}
      </Typography>
      <CardContent>
        <Typography
          className={classes.about}
          variant='body2'
          //  color='textSecondary'
          component='p'>
          {post.about}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Portfolio;
