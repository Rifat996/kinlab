import React, {useEffect, useState} from 'react'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-scroll';
import Gal from './Gal.js';
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [videoCollection, setVideoCollection] = useState([]);
  const videCollectionRef = collection(db, "herovideo");


  useEffect(() => {
    const getVideoCollection = async () => {
      try {
        const data = await getDocs(videCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setVideoCollection(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getVideoCollection();
  }, []);

  return (
    <>
      <section className='showcase'>
        {videoCollection.map((video, k) => (
          <div key={k} className='video-container'>
          <video src={video.video} autoPlay muted loop></video>
        </div>
        ))}
        <div className='content'>
          <h1>Dobrodošli u KINLAB</h1>
          <h3>Full Screen Video Landing Page</h3>
          <h3>
            <Link
              to="gal"
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon className='down-arrow' icon={faAnglesDown} fade />
            </Link>
          </h3>
        </div>
      </section>

      
      <Counter />

      <div id="gal">
        <Gal />
      </div>
    </>
  )
}
