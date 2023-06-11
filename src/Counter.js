import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default function Counter() {
const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };


  return (
    <>
        <Container fluid style={{ marginBottom: '70px' }}>
            <Row className="justify-content-center">
                <Col xs={12} md={4} lg={4} className='text-center overflow-hidden'>
                    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
                        <CountUp style={{ fontSize: '35px',  margin: '40px' }} start={isVisible ? null : 0} end={66} />
                    </VisibilitySensor>
                        <h2 style={{ margin: '20px' }}>zadovoljnih klijenata</h2>
                </Col>
                <Col xs={12} md={4} lg={4} className='text-center overflow-hidden'>
                    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
                        <CountUp style={{ fontSize: '35px',  margin: '40px' }} start={isVisible ? null : 0} end={1300} />
                    </VisibilitySensor>
                        <h2 style={{ margin: '20px' }}>individualnih treninga</h2>
                </Col>
                <Col xs={12} md={4} lg={4} className='text-center overflow-hidden'>
                    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
                        <CountUp style={{ fontSize: '35px',  margin: '40px' }} start={isVisible ? null : 0} end={9} />
                    </VisibilitySensor>
                        <h2 style={{ margin: '20px' }}>godina iskustva</h2>
                </Col>
            </Row>
        </Container>
    </>

  )
}
