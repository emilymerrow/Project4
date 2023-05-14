import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Grid } from "semantic-ui-react";
import "./Header.css";

function PageHeader({ loggedUser, handleLogout }) {
  return (
    <Segment
      className="header"
      style={{
        textAlign: "center",
        backgroundImage: "url(https://i.imgur.com/AMZjBTa.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
      attached="top"
    >
      <Grid>
        <Grid.Column textAlign="right">
          <Header floated="right" style={{ marginTop: "2px", fontSize: "1.5rem" }}>
            <Link to="/">
              <Icon name="home"></Icon>
            </Link>
            <div className="header-link">
              <Link to="/aboutUs" className="outline-link">About Us</Link>
            </div>
            <div className="header-link">
              <Link to="" onClick={handleLogout} className="outline-link">
                Logout
              </Link>
            </div>
          </Header>
        </Grid.Column>
      </Grid>
      <div className="logo-container">
        <Image
          src="https://i.imgur.com/Ltbxtzf.png"
          alt="Logo"
          size="medium"
          centered
          style={{ background: "none" }}
        />
      </div>
      <Grid>
        <Grid.Column textAlign="center">
          <Header
            as="h4"
            textAlign="center"
            className="logo"
            style={{
              fontSize: "2em",
              textShadow: "2px 2px 2px black",
              fontFamily: "Comic Sans MS, sans-serif",
              color: "#FFB84D",
            }}
          >
            Chores Buster
          </Header>
          <Header
            as="h4"
            textAlign="center"
            className="slogan"
          >
            Proudly raising responsible children since 2023
          </Header>
        </Grid.Column>
      </Grid>
      <Header floated="left" style={{ width: "100px" }}>
        <Image
          src={
            loggedUser?.photoUrl
              ? loggedUser?.photoUrl
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
          avatar
          className="header-avatar"
        ></Image>
      </Header>
    </Segment>
  );
}

export default PageHeader;
