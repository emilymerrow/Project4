import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css"; // Import the Header.css file if you haven't already

function PageHeader({ loggedUser, handleLogout }) {
    return (
      <Segment clearing className="main-header">
        {/* User info */}
        <div className="user-info">
          <Link to={`/${loggedUser?.username}`}>
            <Image
              src={
                loggedUser?.photoUrl
                  ? loggedUser?.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
              className="avatar"
            ></Image>
          </Link>
          {/* Display the username */}
          <Header as="h3" floated="left" className="username">
            {loggedUser?.username}
          </Header>
        </div>
  
        {/* Logo */}
        <Header as="h2" className="logo">
          Chores Buster
        </Header>
  
        {/* Navigation links */}
        <Header as="h2" floated="right" className="nav-links">
          <Link to="/">
            <Icon name="home"></Icon>
          </Link>
          <Link to="" onClick={handleLogout}>
            Logout
          </Link>
        </Header>
      </Segment>
    );
  }
  
  
  
export default PageHeader;
