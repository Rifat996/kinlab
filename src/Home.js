import React, {useEffect, useState} from 'react'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-scroll';
import Gal from './Gal.js';
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import ToggleDays from './ToggleDays';

import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [videoCollection, setVideoCollection] = useState([]);
  const videCollectionRef = collection(db, "herovideo");


  useEffect(() => {
    const getVideoCollection = async () => {
      try {
        const data = await getDocs(videCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setVideoCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getVideoCollection();
  }, []);

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
   {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 sticky-top transparent-navbar content">
          <Container fluid>
            <Navbar.Brand style={{ zIndex: '2' }} onClick={handleBrandClick}>
            <img src={Logo} alt="KINLAB Logo" className="navbar-logo" />
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

                  <Link className='navlinks'
                  to="gallery"
                  smooth={true}
                  duration={300}
                  offset={-80}>
                  GALERIJA
                  </Link>

                  <Link className='navlinks'
                  to="gallery"
                  smooth={true}
                  duration={300}
                  offset={-80}>USLUGE</Link>

                  <Link className='navlinks'
                  to="gallery"
                  smooth={true}
                  duration={300}
                  offset={-80}>
                    NAŠA PRIČA
                    </Link>

                    <Link className='navlinks'
                    to="schedule"
                    smooth={true}
                    duration={300}
                    offset={-80}>
                    DOSTUPNI TERMINI
                    </Link>

                  <div className="dot"></div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


      <section className='showcase'>
        {videoCollection.map((video, k) => (
          <div key={k} className='video-container'>
          <video src={video.video} autoPlay muted loop></video>
        </div>
        ))}
        <div className='content'>
          <h1>Dobrodošli u KINLAB</h1>
          <h3>Full Screen Video Landing Page</h3>
          <h3>
            <Link
              to="counter"
              smooth={true}
              duration={300}
              offset={-80}
            >
              <FontAwesomeIcon className='down-arrow' icon={faAnglesDown} fade />
            </Link>
          </h3>
        </div>
      </section>

      
      <div id="counter">
        <Counter />
      </div>

      <div id="gallery">
        <Gal />
      </div>

      <div id="schedule">
         <ToggleDays />
      </div>
    </>
  )
}
