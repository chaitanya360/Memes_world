import React from "react";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top"
      style={{
        zIndex: "2",
        height: "30px",
        // position: "fixed",
        // top: "40px",
        width: "100%",
      }}
      role="navigation"
    >
      {/* <Navbar.Brand href="#home">TechNews</Navbar.Brand> */}
      <Nav className="nav_container" style={{ padding: 0, margin: 0 }}>
        <Nav.Link style={{ paddingLeft: "0px" }}>Home</Nav.Link>
        {/* <Nav.Link
          onClick={() => onCatClick("science")}
          style={{ color: getStyle("science") }}
        >
          Science
        </Nav.Link>

        <Nav.Link
          onClick={() => onCatClick("general")}
          style={{ color: getStyle("general") }}
        >
          General
        </Nav.Link>
        <Nav.Link
          onClick={() => onCatClick("entertainment")}
          style={{ color: getStyle("entertainment") }}
        >
          Entertainment
        </Nav.Link>
        <Nav.Link
          onClick={() => onCatClick("sports")}
          style={{ color: getStyle("sports") }}
        >
          sports
        </Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

export default NavBarComponent;
