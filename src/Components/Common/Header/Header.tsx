import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import { HeaderBasket } from "../../eCommerce";
const { headerContainer, headerLogo } = styles;
function Header() {
  return (
    <header className="header">
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span> <Badge bg="info">Ecom</Badge>
        </h1>
        <HeaderBasket />
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
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Categories</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
