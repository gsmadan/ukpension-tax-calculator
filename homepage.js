import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();
  return (
    <div className='Div'>
      <div className='Div2'>Pension Tax Calculator</div>
      <div className='Div3'>
        <div className='Div4'>Let’s Get Started!</div>
        <div onClick={() => navigate('/second')} 
            style={{ cursor: 'pointer' }}>
          <img
            className='Img'
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/061b8d7dc3bf98287993563af263c490f07e7f057fcedfdfc70fe46d4591cd9a?"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
