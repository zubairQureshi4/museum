/* eslint-disable react/prop-types */
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

const MainNavBar = ({newPage}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Button variant="primary" onClick={newPage}>Next</Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;