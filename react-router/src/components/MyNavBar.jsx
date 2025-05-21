import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";

const MyNavBar = (props) => {
  const location = useLocation();

  const check = (path) =>
    `nav-link ${location.pathname === path ? "text-white" : ""}`;
  {
    return (
      <>
        <Container fluid className="p-0">
          <Navbar expand="lg" className="navbar-expand-lg text-white">
            <Container fluid>
              <Navbar.Brand>
                <NavLink to="/">
                  <img
                    src={`/src/assets/${props.img}.png`}
                    alt="Logo"
                    width="100"
                  />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 text-white"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavLink
                    to="/"
                    className={` ${check("/")} nav-link text-secondary fs-5`}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/Tv-shows"
                    className={` ${check(
                      "/Tv-shows"
                    )} nav-link text-secondary fs-5`}
                  >
                    Tv Shows
                  </NavLink>
                  <NavLink
                    to="/Movies"
                    className={` ${check(
                      `/Movies`
                    )} nav-link text-secondary fs-5`}
                  >
                    Movies
                  </NavLink>
                  <NavLink
                    to="/Recently-Added"
                    className={` ${check(
                      "/Recently-Added"
                    )} nav-link text-secondary fs-5`}
                  >
                    Recently Added
                  </NavLink>
                  <NavLink
                    to="/My-List"
                    className={` ${check(
                      "/My-List"
                    )} nav-link  text-secondary fs-5`}
                  >
                    My List
                  </NavLink>
                </Nav>
                <div className="ms-auto d-flex align-items-center">
                  <NavLink className="text-white">
                    <Search className={props.fontIcon} />
                  </NavLink>
                  <p className="mb-0 mx-3">KIDS</p>
                  <Bell className={props.fontIcon} />
                  <PersonCircle className={`${props.fontIcon} ms-4`} />
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
};

export default MyNavBar;
