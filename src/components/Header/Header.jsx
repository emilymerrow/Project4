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
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
      attached="top"
    >
          <Grid>
        <Grid.Column textAlign="right">
          <Header floated="right" style={{ marginTop: "0.5px", fontSize: "2rem" }}>
            <Link to="/">
              <Icon name="home"></Icon>
            </Link>
            <Link to="" onClick={handleLogout}>
              Logout
            </Link>
          </Header>
        </Grid.Column>
      </Grid>
       <Header as="h4" className="logo" style={{ marginTop: "0.5rem" }}>
        Chores Buster
      </Header>
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
          <Grid.Column textAlign="right">
            <Header floated="right" style={{ marginTop: "0.5px", fontSize: "2rem" }}>
              <Link to="/">
                <Icon name="home"></Icon>
              </Link>
              <Link to="" onClick={handleLogout}>
                Logout
              </Link>
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
      {/* Add the Chores and Allowance App logo */}
      <Header
        as="h4"
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

      {/* Add the new line */}
      <Header as="h4" className="slogan">
        Proudly raising responsible children since 2023
      </Header>
    </Segment>
  );
}

export default PageHeader;
