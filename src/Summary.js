import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'




export default function Summary() {
  return (
    <>
    <Container>
        <Row className="justify-content-center mb-5">
          <Col className='text-center' xs={10} md={10} lg={12}>
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
          </Col>
          <Col xs={10} md={10} lg={12}>
            <p>
            Lorem Ipsum halo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
        </Row>
      </Container>
      </>
  )
}
