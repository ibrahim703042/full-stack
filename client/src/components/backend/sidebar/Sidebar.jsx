import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <Nav
      className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <LinkContainer to="/admin">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/teachers">
          <Nav.Link>Teachers</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/students">
          <Nav.Link>Students</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/register-student">
          <Nav.Link>Register Student</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
