import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function About() {
  return (
    <>
    <Container fluid style={{ fontSize: '17px' }}>
        
        <Row className="justify-content-center">
            <Col xs={10} md={10} lg={5}>
            <h3>Otkud, šta, kako?</h3>
                <p>Kinlab je osnovao apsolvent kineziologije Haris Šabić. Trenira otkad zna za sebe, a kineziologiju je studirao na Kineziološkom fakultetu u Zagrebu. Prošao je i brojna druga stručna usavršavanja, a po povratku u Bihać odlučuje da započne ovu priču. Ima li išta ljepše nego kad ono što istinski volite i ono što jedino vrhunski znate, spojite u posao? Jel to uopšte posao?
                Čime se bavimo u Kinlabu?
                Posvećeni smo u misiji razvijanja zdravih navika, postizanju forme i željenog izgleda - za ljude koji žele započeti promjenu u pogledu fizičke aktivnosti, trenirati na kvalitetan način i poboljšati kvalitetu života.</p>
                <p>Jer treniranje se ne odnosi samo na vanjski izgled, već i na unutrašnju snagu i kredo, da hodate sa samopouzdanjem i steknete alate za dug, zdrav i svrhovit život.
                Kin iz Kinlab stoji za kinezu lat. kinesis što znači pokret, ali na engleskom znači i rod, pleme, tvoj najbliži krug ljudi. Tako i pristupamo našim mušterijama. Tu smo svi ko jedno malo pleme koje se međusobno podržava i bodri.</p>
                </Col>
                <Col xs={10} md={10} lg={5}>
                <h3>Kako to? Šta nudimo?</h3>
                <p>
                Svi pričaju o nekom individualiziranom pristupu, a onda vas stave u grupu od 20 ljudi, sa 3 fiksna termina i jednakim vježbama za cijelu grupu koja je sačinjena od totalno različitih profila i potreba treniranja. Sve to pored ostalih ljudi koji su u teretani samostalno, tako da nemate ni privatnosti ni dostupne tegove i sprave u svakom trenutku. Individualizirano je šta tačno?
                </p>
                <p>Mi smo prvi studio za individualni trening u gradu. Naša teretana i prostor za trening nisu otvorenog tipa, što znači da treniraju isključivo ljudi sa terminima. A radimo od <strong>1 na 1 pristupa do maksimalno 3 osobe u grupi u jednom terminu.</strong> To omogućuje zaista individualiziran pristup i maksimalnu posvećenost specifičnom profilu i potrebama klijenta. 
                Kad započinjemo saradnju, najprije razgovaramo o tvojim potrebama i željama. Onda skeniramo trenutno stanje i prema mogućnostima definiramo ciljeve i individualni plan treninga. Potom se dogovoramo za termine u kojima ćeš dolaziti. </p>
                </Col>
                
            

        </Row>
    </Container>
    </>
  )
}
