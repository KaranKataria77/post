import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Avatar,
  Button,
  TextField
} from "@material-ui/core";
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from "../../redux/actions/postAction";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router";

function SearchUser({ fetchUsers, users }) {
  const history = useHistory();

  const [value, setValue] = useState(users[0])
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    const load = async () => {
      await fetchUsers();
    };
    load();
  }, []);

  return (
    <Container style={{marginTop:40}}>
      <Grid md={12} sm={12} xs={12}><Autocomplete
        id="combo-box-demo"
        options={users}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          console.log(inputValue)
        }}
        getOptionLabel={(option) => option.username}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search User" variant="outlined" />
        )}
      /></Grid>
      <Button style={{marginTop:20}} variant="contained" onClick={() => {
        history.push(`/user/${value.id}`)
      }}>
        Search User
      </Button>
      <Button style={{marginTop:20, marginLeft:10}} variant="contained" onClick={() => history.push("/")}>
        Return Home
      </Button>
    </Container>
  );
}

const mapStateTOProps = (state) => ({
  user: state.posts.user,
  users: state.posts.users,
});

export default connect(mapStateTOProps, { fetchUser, fetchUsers })(SearchUser);
