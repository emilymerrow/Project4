import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Grid } from "semantic-ui-react";
import "./Header.css";

function PageHeader({ loggedUser, handleLogout }) {
  return (
    <Segment
      className="header"
      attached="top"
      inverted
      style={{
        backgroundImage: "url(https://i.imgur.com/AMZjBTa.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className="header-container">
        <div className="header-logo">
          <Header
            as="h4"
            textAlign="center"
            inverted
            style={{
              fontSize: "6em",
              textShadow: "2px 2px 2px black",
              fontFamily: "Comic Sans MS, sans-serif",
              color: "#FFB84D",
              marginTop: "0",
              marginBottom: "1rem",
            }}
          >
            Chores Buster
          </Header>
          <Header
            as="h4"
            textAlign="center"
            inverted
            className="slogan"
            style={{
              marginBottom: 0,
              color: "black",
              fontSize: "2em",
              fontFamily: "Dancing Script",
              fontWeight: "bold",
            }}
          >
            Raising responsible children since 2023
          </Header>
        </div>
        <Image
          src="https://i.imgur.com/RvBW3Sa.png"
          centered
          size="large"
          style={{ marginTop: "auto", marginBottom: 0 }}
        />
        <div className="header-links right-aligned">
          <Header floated="right" style={{ marginTop: "2px", fontSize: "1.5rem" }}>
          <Link to="/aboutUs" className="outline-link">
              <Icon name="home"></Icon>
            </Link>
            <Link to="/contactUs" className="outline-link">
              Contact Us
            </Link>
            <Link to="/" className="outline-link">
              Task Manager
            </Link>
            <Link to="/login" onClick={handleLogout} className="outline-link">
              Logout
            </Link>
          </Header>
        </div>
        <div className="header-avatar">
          <Image
            src={
              loggedUser?.photoUrl ||
              "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
            size="tiny"
            floated="left"
          />
        </div>
      </div>
    </Segment>
  );
}

export default PageHeader;
