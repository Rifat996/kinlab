import React, {useEffect, useState} from 'react'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import './App.css'
import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';




export default function Blog() {
  const [blogCollection, setBlogCollection] = useState([]);
  const blogCollectionRef = collection(db, "blogovi");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBlogCollection = async () => {
      try {
        const data = await getDocs(blogCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setBlogCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getBlogCollection();
  }, []);


  const handleProcitajClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
     {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 sticky-top transparent-navbar content">
          <Container fluid>
            <Navbar.Brand style={{ zIndex: '2' }} onClick={handleBrandClick}>
            <img style={{ borderRadius:'50px' }} src={Logo} alt="KINLAB Logo" className="navbar-logo" />
            <span style={{ color: 'white', marginLeft: '20px' }} className="navbar-title">BLOG</span>
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
                     <FontAwesomeIcon icon={faArrowLeftLong} style={{color: "#ffffff", marginRight: '5px'}} />
                  NAZAD
                  </NavLink>

                  <div className="dot"></div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
    <Container data-aos="fade-up">
      <Row className='justify-content-center'>
    {blogCollection.map((blog, k) => (
      <Col className='mb-3' xs={11} md={6} lg={4} key={k}>

    <Card style={{ border: 'none' }} bg="dark" text="white">
      <Card.Img
        src={blog.fotka}
        alt="Background Image"
        style={{ opacity: 0.8 }}
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <Card.Title>{blog.naslov}</Card.Title>
    
        <Button variant="dark" onClick={() => handleProcitajClick(blog)}>Pročitaj
        <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#ffffff", marginLeft: '5px'}} /></Button>
      </Card.ImgOverlay>
    </Card>

      </Col>
     ))}
      </Row>
    </Container>

    <BlogModal blog={selectedBlog} showModal={showModal} setShowModal={setShowModal} />


    <Footer />
    </>
  )
}



const BlogModal = ({ blog, showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!showModal || !blog) {
    return null;
  }

  return (
    <Modal size="lg" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{blog.naslov}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <img className='img-fluid mb-3' src={blog.fotka} alt="Blog Image" />
        <div className='p-3'>
          <p>{blog.pasus1}</p>
          <p>{blog.pasus2}</p>
          <p>{blog.pasus3}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Zatvori
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
