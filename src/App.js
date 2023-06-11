import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Blog from './Blog';
import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
      </Route>
      
    )
  )



  return (
    <>
    
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;



const Root = () => {

  

  return <>
  <style>{`
          body {
            font-family: 'Fjalla One', sans-serif;          }
        `}</style>

      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 sticky-top transparent-navbar content">
          <Container fluid>
            <Navbar.Brand style={{ zIndex: '2' }} href="/">
            <img src={Logo} alt="KINLAB Logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} alt="KINLAB Logo" className="navbar-logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navMenu" style={{ letterSpacing: '0.1em' }}>
                  <Nav.Link href="/">GALERIJA</Nav.Link>
                  <Nav.Link href="/blog">BLOG</Nav.Link>
                  <Nav.Link href="/">USLUGE</Nav.Link>
                  <Nav.Link href="/">NAŠA PRIČA</Nav.Link>
                  <Nav.Link href="/">REZERVIŠI TERMIN</Nav.Link>
                  <div className="dot"></div>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


      <div>
        <Outlet />
      </div>
  </>

}