import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "./Assets/Images/IthaqLogo.png";
import { NavLink } from "react-router-dom";
function Navbars() {
  const nav = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/CountactUs" },
  ];
  const navLogin = [
    { label: "Employee", href: "/Employees" },
    { label: "Job Offer", href: "/JobOffers" },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="/" m={8}>
          <img
            src={logo}
            width="60"
            height="60"
            style={{ borderRadius: "50%" , marginLeft: "20px"}}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            {localStorage.getItem("isLogin")
              ? navLogin.map((value) => (
                  <Nav.Link as={NavLink} to={value.href}>
                    {value.label}
                  </Nav.Link>
                ))
              : nav.map((value) => (
                  <Nav.Link as={NavLink} to={value.href}>
                    {value.label}
                  </Nav.Link>
                ))}
          </Nav>
          {localStorage.getItem("isLogin") ? (
            <Button as={NavLink} to="/Dashboard" variant="warning" style={{ marginRight: "20px"}}>
              Dashboard
            </Button>
          ) : (
            <Button as={NavLink} to={"/login"} variant="warning" ml="20px" style={{ marginRight: "20px"}}>
              {" "}
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default Navbars;
