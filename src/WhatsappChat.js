import React from 'react';
import WhatsAppImg from './imgs/whatsapp-img.png'
import './App.css'


function WhatsAppButton() {
  const phoneNumber = '38763797720';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;



  return (
    <div style={{ cursor: "pointer" }} className='text-center'>
    <a style={{ textDecoration: 'none' }} href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img style={{ width: '30px' }} src={WhatsAppImg} alt="whatsappimg"></img><p style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>+38763797720</p>
    </a>
    </div>
  );
}

export default WhatsAppButton;
