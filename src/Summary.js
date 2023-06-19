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
          <Col xs={10} md={10} lg={6}>
            <p>
            Kinlab, osnovan od strane stručnjaka kineziologije Harisa Šabića, predstavlja idealnu destinaciju za one koji teže poboljšanju fizičkog izgleda, razvijanju zdravih navika i unapređenju kvalitete života. Koncept rada Kinlaba utemeljen je na individualnom pristupu, gdje se svakom klijentu pristupa personalizirano, uz maksimalno tri osobe po grupi.
            </p>
          </Col>
          <Col xs={10} md={10} lg={6}>
            <p>
            Kinlab, osnovan od strane stručnjaka kineziologije Harisa Šabića, predstavlja idealnu destinaciju za one koji teže poboljšanju fizičkog izgleda, razvijanju zdravih navika i unapređenju kvalitete života. Koncept rada Kinlaba utemeljen je na individualnom pristupu, gdje se svakom klijentu pristupa personalizirano, uz maksimalno tri osobe po grupi.
            </p>
          </Col>
        </Row>
      </Container>
      </>
  )
}
