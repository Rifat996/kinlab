import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'




export default function Summary() {
  return (
    <>
    <Container>
        <Row className="justify-content-center mb-5">
          <Col className='text-center' xs={10} md={10} lg={12}>
            <h3>O nama</h3>
          </Col>
          <Col xs={10} md={10} lg={6}>
            <p>
            Kinlab je centar za sve one koji teže poboljšanju fizičkog izgleda, razvijanju zdravih navika i kvalitetnijem životu. Radeći u malim grupama, Kinlab osigurava personalizirani pristup, podršku 24/7  i maksimalan fokus na svakog klijenta. 

            Naša teretana posvećena je isključivo klijentima sa zakazanim terminima, čime osiguravamo vrhunsku privatnost i komfor tijekom vaših treninga. Osiguravamo i savjete o ishrani te pristup zasnovan na najnovijim znanstvenim saznanjima. 

            </p>
          </Col>
          <Col xs={10} md={10} lg={6}>
            <p>
            Kinlab pruža usluge u moderno opremljenom i (uvijek) čistom prostoru, uključujući vrhunske sprave koje su rijetke u okolini. Uz to, nudimo i online coaching, idealan za one kojima je teretana manje dostupna ili preferiraju trening na daljinu.

            Ako niste zadovoljni nakon mjesec dana, nudimo povrat novca. Ali kod nas, klijenti su više od broja u teretani - oni su dio našeg plemena. Kinlab je mjesto koje podržava vaš put prema zdravijem i ispunjenijem životu.
            </p>
          </Col>
        </Row>
      </Container>
      </>
  )
}
