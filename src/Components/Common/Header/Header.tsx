import { useAppDispatch, useAppSelector } from "@store/hooks";
import { logOut } from "@store/Auth/AuthSlice";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import HeaderRightBar from "./HeaderRightBar/HeaderRightBar";
import { actGetWishlistItems } from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";

const { headerContainer, headerLogo } = styles;
function Header() {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlistItems("items"));
    }
  }, [dispatch, accessToken]);

  return (
    <header className="header">
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">eCom</Badge>
        </h1>
        <HeaderRightBar />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                {/* render this component as a NavLink */}
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavDropdown title={`Welcome ${user?.firstName}!`}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={NavLink}
                      to="/"
                      onClick={() => dispatch(logOut())}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
