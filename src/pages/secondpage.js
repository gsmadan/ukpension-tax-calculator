import * as React from "react";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";



function SecondPage() {


  const [pensionsMasterData, setPensionsMasterData] = useState({
    AnnualPensionBenefits_CurrentFY: '',
    AnnualPensionBenefits_CurrentFYMinus1: '',
    AnnualPensionBenefits_CurrentFYMinus2: ''
    // ,
    // TaxableIncome_CurrentFY: '',
    // PrivatePensions_Flag: '',
    // PrivatePensionsWithdrawal_Flag: '',
    // PrivatePensionsWithdrawal_PotSize: '',
    // PrivatePensionsWithdrawal_Type: ''
  });

  // const [privatePensionsData, setPrivatePensionsData] = useState({
  //   PensionProvider: '',
  //   PolicyNumber: '',
  //   PolicyStartDate: '',
  //   PresentPotValue: '',
  //   EmployerContr_CurrentFY: '',
  //   EmployerContr_CurrentFYMinus1: '',
  //   EmployerContr_CurrentFYMinus2: '',
  //   EmployeeContr_CurrentFY: '',
  //   EmployeeContr_CurrentFYMinus1: '',
  //   EmployeeContr_CurrentFYMinus2: '',
  //   WithdrawalFlag: ''
  // });

  const navigate = useNavigate();
  
  const handleChangeMaster = (e) => {
    const value = e.target.value;
    setPensionsMasterData({
      ...pensionsMasterData,
      [e.target.name]: value ? parseFloat(value) : ""
    });
  };

  // const handleChangePrivate = (e) => {
  //   setPrivatePensionsData({
  //     ...privatePensionsData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = async () => {
    try {
      console.log(pensionsMasterData); // Log the data you're sending to the backend
      
      await axios.post('http://localhost:8000/pensions_master/', pensionsMasterData);
      navigate('/third');
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };
  
  
  
  return (

      <div className="div">
        <div className="div-2">Lets start with your DB Pension </div>
        <div className="div-3">Please enter your Annual Pension Benefits </div>
        <div className="div-4">2023-2024</div>
        <div className="div-5">
          ￡
          <input
            type="number"
            step="0.01"
            name="AnnualPensionBenefits_CurrentFY"
            value={pensionsMasterData.AnnualPensionBenefits_CurrentFY}
            onChange={handleChangeMaster}
          />
        </div>
        <div className="div-6">2022-2023</div>
        <div className="div-7">
          ￡
          <input
            type="number"
            step="0.01"
            name="AnnualPensionBenefits_CurrentFYMinus1"
            value={pensionsMasterData.AnnualPensionBenefits_CurrentFYMinus1}
            onChange={handleChangeMaster}
          />
        </div>
        <div className="div-8">2021-2022</div>
        <div className="div-9">
          ￡
          <input
            type="number"
            step="0.01"
            name="AnnualPensionBenefits_CurrentFYMinus2"
            value={pensionsMasterData.AnnualPensionBenefits_CurrentFYMinus2}
            onChange={handleChangeMaster}
          />
        </div>
        <div onClick={handleSubmit} 
            style={{ cursor: 'pointer' }}>
          <div className="div-10">SUBMIT</div>
        </div>
      </div>

  )
}

export default SecondPage; 