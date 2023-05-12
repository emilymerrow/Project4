import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css"; 

function PageHeader({ loggedUser, handleLogout }) {
  return (
    <Segment className="page-header" style={{ textAlign: 'center' }} attached='top'>
      <Header as="h2" floated="right">
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header floated="left" style={{width: '100px'}}>
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
          fontSize: '2em',
          textShadow: '2px 2px 2px black',
          fontFamily: 'Comic Sans MS, sans-serif',
          color: '#FFB84D'
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
