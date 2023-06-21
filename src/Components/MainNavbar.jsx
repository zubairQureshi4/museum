/* eslint-disable react/prop-types */
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import './Navbar.css'

const MainNavBar = ({newPage, setIsUser, isLoading}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Button className='btnNav' variant="danger" onClick={newPage} disabled={isLoading}>{isLoading ? <div className="spinner-border" role="status"><span className="sr-only"></span></div>: <spam>Get Next Items</spam>}</Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbarDropdown">
          <NavDropdown className='' title={localStorage.getItem('email')} id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" onClick={()=>{localStorage.removeItem('email') ,setIsUser(false)}}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;
