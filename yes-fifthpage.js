import * as React from "react";
import { useNavigate } from "react-router-dom";

function YesFifthPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className="div-51">
                <div className="div-52">
                    Private Pension
                    <br />
                    Withdrawal
                </div>
                <div className="div-53">
                    Have you withdrawn money
                    <br/>
                    from any of your private
                    <br/>
                    pensions?
                </div>
                <div className="div-64">
                    <div onClick={() => navigate('/yes-fifth-yes')}
                        style={{ cursor: 'pointer' }}>
                        <div className="div-55">YES</div>
                    </div>
                    <div onClick={() => navigate('/yes-fifth-no')}
                        style={{ cursor: 'pointer' }}>
                        <div className="div-56">NO</div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default YesFifthPage;

