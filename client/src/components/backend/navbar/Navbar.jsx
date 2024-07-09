import { Container, Navbar, Nav } from 'react-bootstrap';

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
              <Nav.Link href={'/'}>Home</Nav.Link>
              <Nav.Link href="#">Managment</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              {/* <Nav.Link href="#">LogOut</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
