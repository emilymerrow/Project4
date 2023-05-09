import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header"
import Loader from"../../components/Loader/Loader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

import userService from "../../utils/userService";
import * as choresApi from '../../utils/choresService'

export default function ProfilePage({loggedUser, handleLogout}) {
    const [chores, setChores] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { username } = useParams();
  console.log(username, " <- Username from params");

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      setLoading(false);
      setChores(data.chores);
      setProfileUser(data.user);
    } catch (err) {
      console.log("error from get profile ->", err);
      setError("Profile does not exist");
    }
  }
  // Add any additional functions for your chores app here

  if (error) {
    return (
      <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
        <Loader />
      </>
    );
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}  />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={profileUser}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
         
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}