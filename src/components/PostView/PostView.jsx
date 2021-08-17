import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchPost,
  fetchUser,
  fetchComments,
} from "../../redux/actions/postAction";
import { Container, Grid, Avatar, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

function PostView({
  fetchPost,
  post,
  fetchComments,
  fetchUser,
  comments,
  user,
}) {
  const { id } = useParams();

  const history = useHistory()

  useEffect(() => {
    fetchPost(id);
    fetchComments(id);
    fetchUser(post.userId);
    console.log("post ", post, comments);
  }, [user && user.username]);

  return (
    <Container>
      <Grid
        style={{ display: "flex", flexDirection: "column" }}
        container
        md={12}
        sm={12}
        xs={12}
        spacing={2}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h2>{user.username}</h2>
        {comments.map((com, i) => (
          <Grid
            style={{
              borderBottomColor: "red",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
            }}
            md={10}
            sm={8}
            xs={8}
          >
            <h4>{com.name}</h4>
            <h2>{com.body}</h2>
            <p>{com.email}</p>
          </Grid>
        ))}
      </Grid>
      <Button style={{marginTop:40, marginBottom:40}} variant="contained" onClick={() => history.push("/")}>
          Home
        </Button>
    </Container>
  );
}

const mapStateTOProps = (state) => ({
  user: state.posts.user,
  post: state.posts.post,
  comments: state.posts.comments,
});

export default connect(mapStateTOProps, {
  fetchUser,
  fetchPost,
  fetchComments,
})(PostView);
