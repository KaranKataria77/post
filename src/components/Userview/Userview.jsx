import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { fetchUsers, fetchUser } from '../../redux/actions/postAction';
import { Container, Grid, Avatar, Button  } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router"; 
import './Userview.css';

function Userview({fetchUser, user}) {

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchUser(id)
        console.log(user)
    }, [])

    return (
        <Container>
            <Grid container md={12} sm={12} xs={12} spacing={2}>
                <Grid className='userview-grid' md={6}>
                    <p>Name:</p>
                    <h2>{user.username ? user.username : "Bret"}</h2>
                </Grid>
                <Grid className='userview-grid' md={6}>
                <p>Username:</p>
                    <h2>{user.name ? user.name : "Bret Laemen"}</h2>
                </Grid>
                <Grid className='userview-grid' md={6}>
                <p>email:</p>
                    <h2>{user.email ? user.email : "Nathan@yesenia.net"}</h2>
                </Grid>
                <Grid className='userview-grid' md={6}>
                <p>Website:</p>
                    <h2>{user.website ? user.website : "ramiro.info"}</h2>
                </Grid>
                <Grid className='userview-grid' md={6}>
                <p>Company:</p>
                    <h2>{user ? user.company.name : "Romaguera-Jacobson"}</h2>
                </Grid>
            </Grid>
            <Button style={{marginTop:40}} variant="contained" onClick={() => history.push("/")}>Home</Button>
        </Container>
    )
}

const mapStateTOProps = (state) => ({
    user: state.posts.user,
  });

export default connect(mapStateTOProps, { fetchUser })(Userview)
