import React, {useState, useEffect} from "react";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import {createPortfolio} from "../../actions/portfolio";
// import {createPortfolio} from "../../actions/posts";

const Admin = () => {
  const [postData, setPostData] = useState({
    name: "",
    about: "",
    tags: "",
    selectedFile: "",
  });
  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );

  const dispatch = useDispatch();
  const classes = useStyles();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = () => {
    // setCurrentId(0);
    setPostData({
      // creator: "",
      name: "",
      about: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPortfolio(postData));
    clear();
    // if (currentId === 0) {
  };
  // } else {
  //   dispatch(updatePost(currentId, postData));
  //   clear();
  // }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>
          {/* {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
           */}
          Add a portfolio
        </Typography>
        {/* <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
        /> */}
        <TextField
          name='name'
          variant='outlined'
          label='name'
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({...postData, name: e.target.value})}
        />

        <TextField
          name='about'
          variant='outlined'
          label='about'
          fullWidth
          multiline
          rows={4}
          value={postData.about}
          onChange={(e) => setPostData({...postData, about: e.target.value})}
        />

        <TextField
          name='tags'
          variant='outlined'
          label='Tags (coma separated)'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({...postData, tags: e.target.value.split(",")})
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) =>
              setPostData({...postData, selectedFile: base64})
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth>
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Admin;
