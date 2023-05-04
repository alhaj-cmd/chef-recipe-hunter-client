import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Porvider/AuthPorvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-dark';
  }

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }

  return (

    <div className='header ' >

      <Navbar variant="info" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="logo.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto gap-4'>
              <Link to='/' className={`text-decoration-none ${getNavLinkClass('/')}`}>
                Home
              </Link>
              <Link to='/blog' className={`text-decoration-none ${getNavLinkClass('/blog')}`}>
                Blog
              </Link>
            </Nav>
            <Nav>

              {user && <img className='rounded-circle' width={'30px'} height={'30px'} src={user?.photoURL} alt="" />}

              {user ? <Button onClick={handleLogOut} variant='secondary'>LogOut</Button> : <Link to='/login'><Button variant='secondary'>LogIn</Button></Link>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='home '>

        <div className='container'>
          <div className="row mt-4 pt-4 ">
            <div className="col-sm-12 col-md-6 ">
              <h3>The Perfect Choice</h3>
              <h1>HEALTHY FOOD</h1>
              <p>Fresh, organic ingradregient. Carefully prepared</p>
              <Link to='/'><Button>BOOK A TABLE</Button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;