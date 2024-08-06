import * as React from "react";
import '../App';
import { useNavigate } from "react-router-dom";

function ThirdPageYes() {

  const navigate=useNavigate();

  return (
    <div className="div-21">
      <div className="div-22">
        Taxable Income
        <br />
        Information
      </div>
      <div className="div-23">
        Please enter your <br />
        Total Taxable Income for <br />
        2023-2024{" "}
      </div>
      <div className="div-24">2023-2024</div>
      <div className="div-25">￡</div>
      <div className="div-26">
        Have you invested in
        <br />
        any Private Pensions?{" "}
      </div>
      <div className="div-27">
        <div className="div-28">YES</div>
        <div className="div-29">NO</div>
      </div>
      <div onClick={() => navigate('/yes-fourth')}
        style={{ cursor: 'pointer' }}>
        <div className="div-210">SUBMIT</div>
      </div>
    </div>

  );
}


export default ThirdPageYes;

