import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import i1 from './imgs/i1.jpg';
import i2 from './imgs/i2.jpg';
import i3 from './imgs/i3.jpg';
import i4 from './imgs/i4.jpg';
import i5 from './imgs/i5.jpg';



export default function About() {
  return (
    <>
    <Container fluid style={{ fontSize: '17px' }}>
        
        <Row className="justify-content-center">

            <Col className='text-center d-flex flex-column align-items-center' xs={6} md={6} lg={2}>
              <img alt='img' src={i1} />
              <strong>Trening prilagođen klijentu</strong>
              <p>(pravi individualni trening)</p>
            </Col>
            <Col className='text-center d-flex flex-column align-items-center' xs={6} md={6} lg={2}>
              <img alt='img' src={i4} />
              <strong>Savjeti za ishranu</strong>
              <p>(zdrav zivot, max rezultati)</p>
            </Col>
            <Col className='text-center' xs={12} md={12} lg={2}>
               <img alt='img' src={i5} />
            </Col>
            <Col className='text-center d-flex flex-column align-items-center' xs={6} md={6} lg={2}>
               <img alt='img' src={i2} />
               <strong>Online trening i mentorstvo</strong>
               <p>(putem specijalizirane aplikacije)</p>
            </Col>
            <Col className='text-center d-flex flex-column align-items-center' xs={6} md={6} lg={2}>
                <img alt='img' src={i3} />
                <strong>Profesionalno i obrazovano osoblje</strong>
                <p>(treniraju te kineziolozi)</p>
            </Col>
            <Col className='text-center d-flex flex-column align-items-center' xs={12} md={12} lg={12}>
              <Button href='/services' variant='dark'>
                Pročitaj više
                <FontAwesomeIcon icon={faArrowRightLong} style={{color: "#ffffff", marginLeft: '5px'}} />
              </Button>
            </Col>
                
        </Row>
    </Container>
    </>
  )
}
