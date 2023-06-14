import React, {useEffect, useState} from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './App.css'
import Collapsible from 'react-collapsible';



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
    <Row>
      <Col className='text-center mb-2 mt-5'>
        <h3>Raspored termina: </h3>
      </Col>
    </Row>


    <Row className="justify-content-center">
  
      {timeSlotCollection.map((termin, k) => (   
        <Col key={k} className='text-center termini' xs={10} sm={10} md={8}>
            <Collapsible easing='ease-in-out' transitionTime={500} triggerTagName="div" 
            trigger={termin.dan}>
                
              <div className="time-slot">
                  <p>09:00 - 10:00 {termin.od9do10}</p>
                  <p>10:00 - 11:00 {termin.od10do11}</p>
                  <p>11:00 - 12:00 {termin.od11do12}</p>
                  <p>12:00 - 13:00 {termin.od12do13}</p>
                  <p>13:00 - 14:00 {termin.od13do14}</p>
              </div>
            </Collapsible>
            </Col>
        ))}
        <div className='mb-5'></div>
        
    </Row>
  </Container>

        
        
  </>

  )
}
