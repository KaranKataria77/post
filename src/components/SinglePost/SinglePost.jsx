import React, { useEffect, useState } from "react";
import { Container, Grid, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from "../../redux/actions/postAction";
import './SinglePost.css';

function SinglePost({
  title,
  fetchUser,
  user,
  postId,
  id,
  users,
  fetchUsers,
  history,
  gotUsers,
}) {
  const [postUsers, setPostUsers] = useState(null);
  const [rend, setRend] = useState(false);

  useEffect(() => {
    const load = async () => {
      gotUsers.find(getName);
    };
    load();
  }, []);

  function getName(data) {
    if (data.id === id) {
      setPostUsers(data);
      setRend(true);
    }
  }

  return (
    <Grid md={5} className="post-grid-1">
      <h1 className="post-title">{title}</h1>
      <p
        onClick={() => history.push(`/post/${postId}`)}
        className="post-description"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
      <div className="post-user" onClick={() => history.push(`/user/${id}`)}>
        <Avatar>H</Avatar>
        <p
          className="post-username"
        >
          {postUsers ? postUsers.username : "Username"}
        </p>
      </div>
    </Grid>
  );
}

const mapStateTOProps = (state) => ({
  user: state.posts.user,
  users: state.posts.users,
});

export default connect(mapStateTOProps, { fetchUser, fetchUsers })(SinglePost);
