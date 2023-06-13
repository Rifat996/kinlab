import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center">
            <Col xs={10} md={10} lg={10} className='mb-5 mt-5'>
                <h3>Lorem Ipsum is Nasa prica</h3>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col className='mb-5' xs={10} md={10} lg={10}>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className='mb-5'>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                <h3 className='mb-5'>Lorem Ipsum is Nasa prica</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </Col>
        </Row>
    </Container>
    </>
  )
}
