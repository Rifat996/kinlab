import React, {useEffect, useState} from 'react'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-scroll';
import Gal from './Gal.js';
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import ToggleDays from './ToggleDays';
import { TypeAnimation } from 'react-type-animation';
import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import WhatsAppButton from './WhatsappChat';
import About from './About';
import Maps from './Maps';
import { ScrollToTop } from 'react-simple-scroll-up'
import { NavLink } from 'react-router-dom';



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

                  <Link className='navlinks'
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-90}>
                  USLUGE
                  </Link>

                  <Link className='navlinks'
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-90}>
                  NAŠA PRIČA
                  </Link>

                  <Link className='navlinks'
                  to="schedule"
                  smooth={true}
                  duration={300}
                  offset={-80}>
                  TERMINI
                  </Link>

                  <Link className='navlinks'
                  to="gallery"
                  smooth={true}
                  duration={300}
                  offset={-90}>
                  GALERIJA
                  </Link>

                  <NavLink className='navlinks' to="/blog">
                    BLOG
                  </NavLink>

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
          <video src={video.video} muted loop></video>
        </div>
        ))}
        <div className='content'>
          <TypeAnimation
        sequence={[
          'Dobrodošli u KINLAB!',
          3000, 
          'Odgovorno ispitujemo tvoje granice kroz trening prilagođen tvom tijelu i potrebama.',
          1400,
          'Treniraj opušteno u privatnom ambijentu u najčišćoj teretani u gradu.',
          1400,
          'Nema gužvi. Nema vonja. Nema čekanja na sprave. I nema modernog coaching bullshita.',
          1400,
          'Garantujemo rezultate, ako garantuješ da ćeš nas slušati i marljivo raditi.',
          1400
            ]}
            wrapper="span"
            speed={60}
            deletionSpeed={90}
            style={{ fontSize: '1.5em', display: 'inline-block', paddingTop: '40px' }}
            repeat={Infinity}
          />
          </div>
          <div style={{ zIndex: '2', position: 'absolute', bottom: '20px' }}>
            <h6>Pogledaj dostupne termine</h6>
            <h3>
              <Link style={{ cursor: 'pointer' }}
                to="schedule"
                smooth={true}
                duration={300}
                offset={-80}
              >
                <FontAwesomeIcon icon={faAnglesDown} fade />
              </Link>
            </h3>
          </div>
      </section>

      
      <div id="counter">
        <Counter />
      </div>

      {/* <div>
        <Services />
      </div> */}

      <div id='about'>
        <About />
      </div>

      <div id="gallery">
        <Gal />
      </div>

      <div id="schedule">
         <ToggleDays />
      </div>
      
      <div style={{ height: '300px', padding: 0 }}>
         <Maps latitude={44.81324132833271} longitude={15.862880841530078} />
      </div>


      <div style={{ position: "fixed", bottom: "0px", left: "20px", zIndex: "999" }}>
      <WhatsAppButton />
      </div>

      <Footer />

      <ScrollToTop symbol={<FontAwesomeIcon icon={faAnglesUp} style={{ color: 'white' }} />} />

    </>
  )
}
