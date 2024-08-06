import * as React from "react"
import '../App.css';
import { useNavigate } from "react-router-dom";

function ThirdPage() {

    const navigate = useNavigate();
    return (

        <div className="div-11">
            <div className="div-12">
                Taxable Income
                <br />
                Information
            </div>
            <div className="div-13">
                Please enter your <br />
                Total Taxable Income for <br />
                2023-2024{" "}
            </div>
            <div className="div-14">2023-2024</div>
            <div className="div-15">￡</div>
            <div className="div-16">
                Have you invested in
                <br />
                any Private Pensions?{" "}
            </div>
            <div className="div-17">
                <div onClick={() => navigate('/third-yes')} 
                style={{ cursor: 'pointer' }}>
                    <div className="div-18">YES</div>
                </div>
                <div className="div-19">NO</div>
            </div>
        </div>
    )
}

export default ThirdPage; 