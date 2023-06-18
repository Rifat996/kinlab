import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';

export default function Counter() {
  return (
    <Container fluid style={{ marginBottom: '70px' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={3} className='text-center overflow-hidden'>
          <div>
            <CountUp
              start={0}
              end={66}
              duration={2.5}
              separator=","
              suffix="+"
              enableScrollSpy={true}
              style={{ fontSize: '35px', margin: '40px' }}
            />
            <h2 style={{ margin: '20px' }}>zadovoljnih klijenata</h2>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3} className='text-center overflow-hidden'>
          <div>
            <CountUp
              start={0}
              end={1300}
              duration={3}
              separator=","
              suffix="+"
              enableScrollSpy={true}
              style={{ fontSize: '35px', margin: '40px' }}
            />
            <h2 style={{ margin: '20px' }}>individualnih treninga</h2>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3} className='text-center overflow-hidden'>
          <div>
            <CountUp
              start={0}
              end={7}
              duration={1.5}
              style={{ fontSize: '35px', margin: '40px' }}
            />
            <h2 style={{ margin: '20px' }}>godina iskustva</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
