import * as React from "react";
import '../App.css'
import { useNavigate } from 'react-router-dom';

function SecondPage() {

  const navigate = useNavigate();
  return (

      <div className="div">
        <div className="div-2">Lets start with your DB Pension </div>
        <div className="div-3">Please enter your Annual Pension Benefits </div>
        <div className="div-4">2023-2024</div>
        <div className="div-5">￡</div>
        <div className="div-6">2022-2023</div>
        <div className="div-7">￡</div>
        <div className="div-8">2021-2022</div>
        <div className="div-9">￡</div>
        <div onClick={() => navigate('/third')} 
            style={{ cursor: 'pointer' }}>
          <div className="div-10">SUBMIT</div>
        </div>
      </div>

  )
}

export default SecondPage; 