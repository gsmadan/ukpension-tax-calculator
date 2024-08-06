import React, { useState, useEffect } from "react";

function YesFifthPageYes() {
    const [isAnyCheckboxChecked, setIsAnyCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        const checkboxes = document.querySelectorAll('.checkbox');
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        setIsAnyCheckboxChecked(anyChecked);
    };

    useEffect(() => {
        const checkboxes = document.querySelectorAll('.checkbox');

        const updateCheckboxLabelColor = (checkbox) => {
            const label = checkbox.nextElementSibling;
            if (checkbox.checked) {
                label.style.color = 'green'; // Example: Change label color when checked
                console.log(`${checkbox.id} is checked!`);
            } else {
                label.style.color = ''; // Reset label color when unchecked
                console.log(`${checkbox.id} is unchecked!`);
            }
        };

        const handleChange = () => {
            checkboxes.forEach(updateCheckboxLabelColor);
            handleCheckboxChange();
        };

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleChange);
        });

        // Initial check
        handleChange();

        // Cleanup event listeners on unmount
        return () => {
            checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', handleChange);
            });
        };
    }, []);

    return (
        <>
            <div className="div-71">
                <div className="div-72">
                    Private Pension
                    <br />
                    Withdrawal
                </div>
                <div className="div-73">
                    Have you withdrawn money
                    <br />
                    from any of your private
                    <br />
                    pensions?
                </div>
                <div className="div-74">
                    <div className="div-75">YES</div>
                    <div className="div-76">NO</div>
                </div>
                <div className="div-77">
                    Please select the pensions you
                    <br />
                    have withdrawn money from{" "}
                </div>
                <div className="div-78">
                    <div className="div-713">
                        <div className="white-box">
                            <input type="checkbox" className="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1" className="checkbox-label"></label>
                            <div className="div-723">
                                <div className="div-714">AVIVA</div>
                                <div className="div-715">Policy No. A12456W34</div>
                            </div>
                        </div>

                        <div className="white-box">
                            <input type="checkbox" className="checkbox" id="checkbox2" />
                            <label htmlFor="checkbox2" className="checkbox-label"></label>
                            <div className="div-723">
                                <div className="div-714">AEGON</div>
                                <div className="div-715">Policy No. B23311B21</div>
                            </div>
                        </div>

                        <div className="white-box">
                            <input type="checkbox" className="checkbox" id="checkbox3" />
                            <label htmlFor="checkbox3" className="checkbox-label"></label>
                            <div className="div-723">
                                <div className="div-714">Prudential</div>
                                <div className="div-715">Policy No. Z2221GH2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    id="submit-button"
                    style={{ display: isAnyCheckboxChecked ? 'block' : 'none' }}
                >
                    SUBMIT
                </button>
            </div>
        </>
    );
}

export default YesFifthPageYes;
