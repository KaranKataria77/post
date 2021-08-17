import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchPosts, fetchUsers } from "../../redux/actions/postAction";
import SinglePost from "../SinglePost/SinglePost";
import { useHistory } from "react-router";

function Post({ posts, fetchPosts, fetchUsers, users }) {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("rendered");
    const load = async () => {
      await fetchUsers();
      await fetchPosts();
    };
    load();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container md={12} sm={12} xs={12} spacing={2}>
        {posts.map((data, i) => {
          return (
            <SinglePost
              title={data.title}
              postId={data.id}
              id={data.userId}
              history={history}
              gotUsers={users}
            />
          );
        })}
      </Grid>
      <Button style={{marginTop:40, marginBottom:40}} variant="contained" onClick={() => history.push("/search")}>
          Search User
        </Button>
    </Container>
  );
}

const mapStateTOProps = (state) => ({
  posts: state.posts.posts,
  users: state.posts.users,
});

export default connect(mapStateTOProps, { fetchPosts, fetchUsers })(Post);
