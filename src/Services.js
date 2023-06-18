import React from 'react'
import Logo from './imgs/kinlablogo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';




export default function Services() {
  return (
    <>
    {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 sticky-top transparent-navbar content">
          <Container fluid>
            <Navbar.Brand style={{ zIndex: '2' }}>
            <img style={{ borderRadius:'50px' }} src={Logo} alt="KINLAB Logo" className="navbar-logo" />
            <span style={{ color: 'white', marginLeft: '20px' }} className="navbar-title">NAŠA PRIČA</span>
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
                     NAZAD NA POČETNU
                  </NavLink>

                  <div className="dot"></div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    <Container>
    <Row className="justify-content-center">
            <Col xs={10} md={10} lg={10}>
            <h3>Otkud, šta, kako?</h3>
                <p>Kinlab je osnovao apsolvent kineziologije Haris Šabić. Trenira otkad zna za sebe, a kineziologiju je studirao na Kineziološkom fakultetu u Zagrebu. Prošao je i brojna druga stručna usavršavanja, a po povratku u Bihać odlučuje da započne ovu priču. Ima li išta ljepše nego kad ono što istinski volite i ono što jedino vrhunski znate, spojite u posao? Jel to uopšte posao?</p>
                <h3>
                    Čime se bavimo u Kinlabu?
                </h3>
                <p>
                Posvećeni smo u misiji razvijanja zdravih navika, postizanju forme i željenog izgleda - za ljude koji žele započeti promjenu u pogledu fizičke aktivnosti, trenirati na kvalitetan način i poboljšati kvalitetu života.
                Jer treniranje se ne odnosi samo na vanjski izgled, već i na unutrašnju snagu i kredo, da hodate sa samopouzdanjem i steknete alate za dug, zdrav i svrhovit život.
                Kin iz Kinlab stoji za kinezu (lat. kinesis) što znači pokret, ali na engleskom znači i rod, pleme, tvoj najbliži krug ljudi. Tako i pristupamo našim mušterijama. Tu smo svi ko jedno malo pleme koje se međusobno podržava i bodri.
                </p>
                <h3>
                Kako to? Šta nudimo?
                </h3>
                <p>
                Svi pričaju o nekom individualiziranom pristupu, a onda vas stave u grupu od 20 ljudi, sa 3 fiksna termina i jednakim vježbama za cijelu grupu koja je sačinjena od totalno različitih profila i potreba treniranja. Sve to pored ostalih ljudi koji su u teretani samostalno, tako da nemate ni privatnosti ni dostupne tegove i sprave u svakom trenutku. Individualizirano je šta tačno?
                Mi smo prvi studio za individualni trening u gradu. Naša teretana i prostor za trening nisu otvorenog tipa, što znači da treniraju isključivo ljudi sa terminima. A radimo od 1na1 pristupa do maksimalno 3 osobe u grupi u jednom terminu. To omogućuje zaista individualiziran pristup i maksimalnu posvećenost specifičnom profilu i potrebama klijenta. 
                Kad započinjemo saradnju, najprije razgovaramo o tvojim potrebama i željama. Onda skeniramo trenutno stanje i prema mogućnostima definiramo ciljeve i individualni plan treninga. Potom se dogovoramo za termine u kojima ćeš dolaziti. 
                Od prvog treninga pa nadalje, tvoj trener je tvoja stalna podrška kojem se možeš obratiti uvijek i za sva moguća pitanja. Čak i kad je finale Lige prvaka ili kad trener pokušava sastaviti IKEA ormar u jedinom slobodnom satu tokom dana. Ili kad imaš genijalno pitanje sa neta, tipa može li se predozirati proteinima? Trener će ti uvijek odgovoriti maksimalno strpljivo i argumentovano. 
                Dajemo i predložak namirnica za ishranu, koji nije i ne mijenja službeni nutricionistički program, već je dodatak našim uslugama i služi postizanju najboljih mogućih rezultata, a temelji se na općim smjernicama za zdravu prehranu, prilagođenu ljudima koji dižu utege i žele poboljšati životni stil.
                Sve ovo radimo uz pravi individualan i na dokazima utemeljen pristup, zasnovan na najnovijim znanstvenim istraživanjima u području kineziologije, sportske medicine i fitnessa. Nema modernog coaching bullshita, samo provjereni i naučni izvori. Sve informacije, programi i tehnike su up-to-date.
                </p>
                <h3>
                A teretana i prostor za treniranje?
                </h3>
                <p>
                Za početak higijena. Nas iz Kinlaba lagano voza OKP što se tiče čistoće,  što je za vas odlično. Teretana se čisti svakodnevno i baš nikada nećete tokom svog treninga zateći teretanu sa neugodnim mirisima i rezultatima napora ljudi koji su bili tu prije vas. 
                Već smo naveli da radimo sa maksimalno 3 ljudi odjednom u grupi, što znači da imaš svu komociju i privatnost ovog svijeta dok treniraš. To znači i da tijekom sat vremena svog termina nećeš biti zapostavljen/a što se tiče svih mogućih pitanja, tehnike izvođenja vježbi i generalne podrške tokom treninga.  
                Dakle, Finska ima najbolje obrazovanje jer ima jednog nastavnika na 7.7 učenika u prosjeku, a Kinlab ima zaista individualiziran i kvalitetan pristup jer trener ima maksimalno 3 ljudi u fokusu tijekom jednog termina. Ljepota ovog načina treninga je i što nema gužvi, pa ne morate čekati da neki napucani tebranona završi 14. seriju jedne vježbe u kojoj je pokupio sve utege koji vam trebaju.
                Teretana i prostor za vježbanje su uređeni savremeno po globalnim i aktuelnim trendovima, a opremu smo uvezli iz EU. Imamo zaista bogatu ponudu mašina, sprava i utega. Sve je novo i nije podleglo pretjeranom i neodgovornom korištenju. U našoj teretani nećete naći zahrđale i istrošene sprave koje su prošle kroz hiljadu ruku, često neiskusnih korisnika. Zahvaljujući individualiziranom pristupu i stalnom nadzoru naših trenera, svaki član naše teretane je educiran o pravilnom korištenju sprava i utega, što osigurava da naša oprema ostane u top stanju, kao prvog dana.
                Ono što nas izdvaja od drugih u pogledu opreme su neke mašine, sprave i specifični utezi koje nećete naći unaokolo, a neke od njih su:  DAP mašina, belt squat, seated leg curl (podesiv po uglovima), nožna ekstenzija podesiva po uglovima, hip truster, “Concept 2” veslački ergometar (najbolja sprava ovog tipa na svijetu), power rack, platforma za dizanje utega i open trap bar…
                Eh da, imamo i 200 kila bumpera. To su vam oni gumeni utezi koje možete baciti na pod kad završite ili se naljutite na trenera jer vas je malo isforsirao. Ali ne na trenera! Možda onaj od kile ako je baš bezobrazan?
                </p>
                <h3>
                ONLINE PROGRAM
                </h3>
                <p>
                Mi smo iz Bihaća, pa kome nije geografski pristupačno ili ko jednostavno preferira ovaj tip treninga i mentorstva, nudimo i uslugu online coachinga. To znači, da ćete od nas dobiti sve tabele, programe I planove, a s druge strane ti ćeš komunicirati svoje izazove, poteškoće, napredak i sve ostalo. Kao i sa klijentima kojim radimo uživo, treneri stoje na raspolaganju 24/7. 
                </p>
                <h3>
                GARANCIJA ILI ZAŠTO ODABRATI KINLAB?
                </h3>
                <p>
                Odgovor je jednostavan - zato što smo više od teretane, više od treninga, više od znoja i utezanja. Mi smo vaš najbliži krug, vaše pleme koje podržava vaše putovanje prema zdravlju, snazi i dobrim navikama. Mi smo vaš Kinlab.
                Mi smo tu da bismo s vama podijelili znanje, pružili podršku i kreirali personalizirane planove i programe koji su prilagođeni samo vama. Vi ste za nas jedinstveni, a ne samo još jedan broj u teretani. Nema laži, nema prikrivanja, samo čisti, nepatvoreni rezultati. I ono najvažnije - mi stojimo iza svog rada i svojih obećanja.
                Na kraju dana, ako niste zadovoljni, nismo ni mi. Stoga, ukoliko smatrate da nismo ispunili očekivanja, dajemo garanciju za povrat novca. No, ima razlog zašto ovo još nijednom nije bio slučaj. Zato što kod nas, vi niste samo klijenti - vi ste dio našeg plemena. Dobrodošli u Kinlab.
                </p>
                </Col>
        </Row>
    </Container>

        <Footer />
    </>
  )
}
