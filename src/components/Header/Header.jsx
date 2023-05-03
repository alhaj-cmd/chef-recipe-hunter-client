import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Porvider/AuthPorvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
// const {user} = useContext(AuthContext);

  const {user, logOut} = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

  return (
   
      <div className='header' >
      <Navbar  expand="lg" variant="info">
        <Container>
          <Navbar.Brand href="#home">HEALTHY FOOD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
            <Nav>
            { user && <FaUserCircle style={{fontSize:"2rem"}} ></FaUserCircle>}
           
           {user ? <Button onClick={handleLogOut} variant='secondary'>LogOut</Button> : <Link to='/login'><Button variant='secondary'>LogIn</Button></Link>}
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='home '>

        <Container>
          <div className="row mt-4 pt-4 ">
            <div className="col-sm-12 col-md-6 ">
              <h3>The Perfect Choice</h3>
              <h1>HEALTHY FOOD</h1>
              <p>Fresh, organic ingradregient. Carefully prepared</p>
              <Link to='/'><Button>BOOK A TABLE</Button></Link>

            </div>
          </div>
        </Container>
      </div>
    </div>
   
  );
};

export default Header;