import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link}from 'react-router-dom';
import './NavBar.css';
function NavBar(){
    return(<>
    <Navbar expand="lg" className='navbar'>
        <Container>
          <span  className='logo'>Traveler</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ml-auto">
              <Link to="/" className="link">Home</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
}
export default NavBar;