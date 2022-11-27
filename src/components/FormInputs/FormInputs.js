import React from 'react';
import Cleave from 'cleave.js/react';
import './FormInputs.css'

export const FormInputs = ({handleType,handleNumber,handleCardHolder}) => {
    
    return (
        <>
            <div className='input__container mt'>
                <h4 className='input__name'>Enter card number</h4>
                <Cleave
                    className='form-input'
                    delimiter="-"
                    options={{
                        creditCard: true,
                        onCreditCardTypeChanged: handleType
                    }}
                    onChange={handleNumber}
                    placeholder="Please enter your credit card number"
                />
            </div>
            <div className="input__container">
                <h4 className='input__name'>Card Holder</h4>
                <input onChange={(e) =>handleCardHolder(e.target.value)} className='form-input' type="text" placeholder="Please enter your full name" required/>
            </div>
            <div className="input-grp">
                <div className="input__container">
                    <h4 className='input__name'>Expiration Year</h4>
                    <select className='form-select'>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div className="input__container">
                    <h4 className='input__name'>Month</h4>
                    <select className='form-select'>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        </select>
                </div>
                <div className="input__container">
                    <h4 className='input__name'>CVV</h4>
                    <input className='form-input' type="password" placeholder="CVV" required/>
                </div>
            </div>
        </>
    );
}

