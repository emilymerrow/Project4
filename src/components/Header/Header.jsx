import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./Header.css"; // Import the Header.css file if you haven't already

function PageHeader({ loggedUser, handleLogout }) {
  return (
    <Segment clearing className="page-header">
      <Header as="h2" floated="right">
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to={`/${loggedUser?.username}`}>
          <Image
            src={
              loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
            className="header-avatar"
          ></Image>
        </Link>
      </Header>
      {/* Add the Chores and Allowance App logo */}
      <Header as="h2" floated="" className="logo">
        Chores Buster App
      </Header>
    </Segment>
  );
}

export default PageHeader;
