
import React, {useEffect, useState} from 'react'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Col, Container, Row } from 'react-bootstrap';



export default function Gal() {
  const [galleryCollection, setGalleryCollection] = useState([]);
  const galleryCollectionRef = collection(db, "galerija");

  useEffect(() => {
    const getGalleryCollection = async () => {
      try {
        const data = await getDocs(galleryCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setGalleryCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getGalleryCollection();
  }, []);



  return (
    <>
    <Container className='mt-5'>
      <Row className="justify-content-center">
        <Col>
        <Carousel className='text-center' showThumbs={true} showStatus={false} infiniteLoop showIndicators={false} thumbWidth={120} useKeyboardArrows={true}>
          {galleryCollection.map((photo, k) => (
                  <img
                      key={k}
                      src={photo.fotka}
                      style={{ maxHeight: '700px', maxWidth: '500px' }}
                      alt={`Image ${k}`}
                  />
          ))}
        </Carousel>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
