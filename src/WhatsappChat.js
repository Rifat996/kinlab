import React from 'react';
import WhatsAppImg from './imgs/whatsapp-img.png'
import './App.css'


function WhatsAppButton() {
  const phoneNumber = '38762069303';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;



  return (
    <div style={{ cursor: "pointer" }} className='text-center'>
    <a style={{ textDecoration: 'none' }} href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img style={{ width: '20px' }} src={WhatsAppImg} alt="whatsappimg"></img><p style={{ color: 'rgb(204, 204, 204)' }}>062069303</p>
    </a>
    </div>
  );
}

export default WhatsAppButton;
