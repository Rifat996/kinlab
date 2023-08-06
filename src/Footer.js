import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './imgs/kinlablogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="bg-black text-light p-5">
      <Container>
        <Row>
          <Col md={6} className="text-md-left">
            <h5><img style={{ borderRadius: '50px' }} src={Logo} alt="KINLAB Logo" className="navbar-logo mb-3 mt-5" /></h5>
            <p>COMMIT TO BE FIT</p>
          </Col>
          <Col md={6} className="text-md-right mt-5">
            <h5>KONTAKT</h5>
            <ul className="list-unstyled">
              <li>Adresa: Harmanska 66, Bihac, Bosna i Hercegovina</li>
              <li>Telefon: +38763797720</li>
              <li>Email: kinlab.bihac@gmail.com</li>
              <li>
                <Link to='https://www.instagram.com/kinlab.ba/' style={{color: "#ffffff"}}>
                <FontAwesomeIcon icon={faHashtag} bounce style={{color: "#ffffff"}} />
                 KINLAB INSTAGRAM
                </Link>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
