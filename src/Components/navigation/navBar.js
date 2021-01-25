import { React, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const [navbarStyles, setNavbarStyles] = useState({
    zIndex: "2",
    padding: 0,
    width: "100%",
    opacity: "1",
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle at 10% top, rgba(84,90,182,0.16) 0%, rgba(84,90,182,0) 95%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)",
    color: "white",
  });

  const [iconStyles, setIconStyles] = useState({
    marginLeft: "10px",
    color: "white",
    fontSize: 40,
  });

  return (
    <Navbar
      className="navbar sticky-top"
      style={navbarStyles}
      role="navigation"
    >
      <Nav
        className="nav_containe"
        style={{
          padding: 0,
          margin: 0,
          width: "100%",
          display: "block",
        }}
      >
        <Nav style={{ padding: 0, paddingLeft: "0px", display: "inline" }}>
          <Link to={`/Memes_world/`}>
            {" "}
            <HomeRoundedIcon style={iconStyles} />{" "}
          </Link>
        </Nav>

        <Nav style={{ padding: 0, paddingLeft: "0px", float: "right" }}>
          <Link to={`/Memes_world/account`}>
            {" "}
            <PersonIcon style={iconStyles} />{" "}
          </Link>
        </Nav>
      </Nav>
    </Navbar>
  );
};

export default NavBarComponent;
