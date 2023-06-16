import React from 'react'
import { Link } from 'react-scroll';
import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';



export default function Blog() {
  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
     {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 sticky-top transparent-navbar content">
          <Container fluid>
            <Navbar.Brand style={{ zIndex: '2' }} onClick={handleBrandClick}>
            <img style={{ borderRadius:'50px' }} src={Logo} alt="KINLAB Logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="bottom"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} alt="KINLAB Logo" className="navbar-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navMenu" style={{ letterSpacing: '0.1em' }}>

                  <NavLink className='navlinks'
                  to="/">
                  NAZAD NA POCETNU
                  </NavLink>

                  <div className="dot"></div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    

    <Container>
      <Row>
        <Col>
          <h3>Jos uvijek nista nije objavljeno...</h3>
        </Col>
      </Row>
    </Container>
    </>
  )
}
