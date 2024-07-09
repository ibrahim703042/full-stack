import { Container, Navbar, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <header className="header">
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <span className="fs-4 fw-medium">CRUD</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={'/'}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/users'}>
                <Nav.Link>User</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/roles'}>
                <Nav.Link>Role</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
