import * as React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

function YesFourthPage() {

    const navigate = useNavigate();

    return (
        <div className="divv-1">
            <div className="divv-2">
                Private Pensions
                <br />
                Information
            </div>
            <div className="divv-3">Pension Provider</div>
            <div className="divv-4" />
            <div className="divv-5">Policy Number</div>
            <div className="divv-6" />
            <div className="divv-7">Policy Start Date</div>
            <div className="divv-8" />
            <div className="divv-9">Present Pot Value</div>
            <div className="divv-10">
                <div className="divv-11">￡</div>
            </div>
            <div className="divv-12">Employer Contributions</div>
            <div className="divv-13">2023-2024</div>
            <div className="divv-14">￡</div>
            <div className="divv-15">2022-2023</div>
            <div className="divv-16">￡</div>
            <div className="divv-17">2021-2022</div>
            <div className="divv-18">￡</div>
            <div className="divv-19">Employee Contributions</div>
            <div className="divv-20">2023-2024</div>
            <div className="divv-21">￡</div>
            <div className="divv-22">2022-2023</div>
            <div className="divv-23">￡</div>
            <div className="divv-24">2021-2022</div>
            <div className="divv-25">￡</div>
            <div className="divv-27">+ Add Pension</div>
            <div onClick={() => navigate('/yes-fifth')}
                style={{ cursor: 'pointer' }}>
                <div className="divv-26">SUBMIT</div>
            </div>
        </div>


    );
}

export default YesFourthPage;

