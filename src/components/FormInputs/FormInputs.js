import React from 'react';
import Cleave from 'cleave.js/react';
import './FormInputs.css'

export const FormInputs = ({handleType, handleNumber, handleCardHolder,expireMonth, handleExpireMonth,expireYear, handleExpireYear}) => {
    
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
                    <h4 className='input__name'>Expiration Month</h4>
                    <select value={expireMonth} onChange={(e) => handleExpireMonth(e.target.value)} className='form-select'>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div className="input__container">
                    <h4 className='input__name'>Year</h4>
                    <select value={expireYear} onChange={(e) => handleExpireYear(e.target.value)} className='form-select'>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
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

