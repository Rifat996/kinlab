import React, {useEffect, useState} from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './App.css'
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


export default function ToggleDays() {
  
    const [timeSlotCollection, setTimeSlotCollection] = useState([]);
    const timeSlotCollectionRef = collection(db, "slobodnitermini");

    useEffect(() => {
        const getTimeSlotCollection = async () => {
          try {
            const data = await getDocs(timeSlotCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data()}));
            setTimeSlotCollection(filteredData);
            console.log(filteredData);
          } catch (err) {
            console.log(err);
          }
        }
        getTimeSlotCollection();
      }, []);

  return (
  
  <>
        <style>{`
          .schedulesection {
              background-color: #e7e7e7;
              }
        `}</style>


  <Container className='schedulesection mt-5' fluid>
    <Row className='justify-content-center'>
      <Col xs={12} md={6} lg={6} className='text-center mb-2 mt-5'>
        <h3>Raspored termina: </h3>
        <p>
        Ovdje možete pogledati dostupne termine za trening po danu. Ukoliko želite rezervisati neki od slobodnih termina, kliknite ispod na dugme rezerviši i direktno komunicirajte sa nama. Možete se javiti i na bilo koji drugi način putem poziva ili druge platforme na broj: <strong>062-069-303</strong>.
        </p>
        
        
      </Col>
    </Row>


    <Row className="justify-content-center">
  
      {timeSlotCollection.map((termin, k) => (   
        <Col key={k} className='text-center termini' xs={10} sm={10} md={8}>
          
            <Collapsible easing='ease-in-out' transitionTime={500} triggerTagName="div" 
            trigger={<div>
                        {termin.dan}
                        <FontAwesomeIcon style={{ width: '15px', position: 'relative', left: '10px' }} icon={faAnglesDown} fade />
                      </div>}>
                
              <div className="time-slot">
                  <p>09:00 - 10:00 <strong>{termin.od9do10}</strong></p>
                  <p>10:00 - 11:00 <strong>{termin.od10do11}</strong></p>
                  <p>11:00 - 12:00 <strong>{termin.od11do12}</strong></p>
                  <p>12:00 - 13:00 <strong>{termin.od12do13}</strong></p>
                  <p>13:00 - 14:00 <strong>{termin.od13do14}</strong></p>
              </div>
            </Collapsible>
            </Col>
        ))}
        <div className='text-center'>
        <Button href='tel: 38762069303' variant="warning">Rezerviši</Button>
        </div>
        <div className='mb-5'></div>
        
    </Row>
  </Container>

        
        
  </>

  )
}
