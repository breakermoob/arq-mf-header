import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Root = (props) => {
  return <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="d-flex align-items-center">
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <i className="fab fa-react fa-2x" style={{ color: "#61dbfb" }} aria-hidden="true" />
            <h2 style={{ margin: "0.5rem" }}>Microfrontends</h2>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fa fa-burger fa-lg" style={{ padding: "1rem 0.5rem" }} aria-hidden="true" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/perfil">
              <Nav.Link>Perfil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Ingresar</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Ver más" id="collasible-nav-dropdown">
              <LinkContainer to="/detalles">
                <NavDropdown.Item>
                  Panel - Subdominio
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavDropdown.Item>Blog - Path</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/perfil">
                <NavDropdown.Item>Librería - NPM</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item>Guía Completa</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Router>
}

export default Root;