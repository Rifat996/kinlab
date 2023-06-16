import React, { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function Gal() {
  const [galleryCollection, setGalleryCollection] = useState([]);
  const galleryCollectionRef = collection(db, 'galerija');
  

  const [equipmentCollection, setEquipmentCollection] = useState([]);
  const equipmentCollectionRef = collection(db, 'spravegalerija');

  const [displayGallery, setDisplayGallery] = useState(true);
  const buttonText = displayGallery ? 'Slike sprava' : 'Sve slike';
  useEffect(() => {
    const getGalleryCollection = async () => {
      try {
        const data = await getDocs(galleryCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        setGalleryCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getGalleryCollection();
  }, []);

  useEffect(() => {
    const getEquipmentCollection = async () => {
      try {
        const data = await getDocs(equipmentCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        setEquipmentCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getEquipmentCollection();
  }, []);

  const toggleDisplay = () => {
    setDisplayGallery(!displayGallery);
  };

  return (
    <>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col>
            
            <Carousel
              className='text-center'
              showThumbs={true}
              showStatus={false}
              infiniteLoop
              showIndicators={false}
              thumbWidth={120}
              useKeyboardArrows={true}
            >
              {displayGallery ? (
                galleryCollection.map((photo, k) => (
                  <img
                    key={k}
                    src={photo.fotka}
                    style={{ maxHeight: '700px', maxWidth: '500px' }}
                    alt={`Image ${k}`}
                  />
                ))
              ) : (
                equipmentCollection.map((photo1, k) => (
                  <img
                    key={k}
                    src={photo1.fotka}
                    style={{ maxHeight: '700px', maxWidth: '500px' }}
                    alt={`Image ${k}`}
                  />
                ))
              )}
            </Carousel>
          </Col>
        </Row>
        
      </Container>
      <div className='text-center'>
      <Button variant='secondary' onClick={toggleDisplay} className='mb-3'>
      {buttonText}
      </Button>
      </div>
    </>
  );
}
