import React, { useState } from 'react';
import { FormBtn } from '../FormBtn/FormBtn';
import { CardImg } from '../CardImg/CardImg'
import { FormInputs } from '../FormInputs/FormInputs';
import { imageUrls } from '../../utils';
import './Form.css'



export const Form = () => {

    const [creditCardNumber, setCreditCardNumber] = useState('#### #### #### ####');
    const [cardType, setCardType] = useState('');
    const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
    const [cardHolder, setCardHolder] = useState('Your Full Name');
    const [expireMonth, setExpireMonth] = useState('MM');
    const [expireYear, setExpireYear] = useState('YYYY');

    const handleNumber = (e) => {
        setCreditCardNumber(e.target.rawValue);
    }

    const handleType = (type) => {
        setCardType(type);

        let newCardTypeUrl = imageUrls.find( item => item.name === type )
        
        setCardTypeUrl(newCardTypeUrl ? newCardTypeUrl.value : 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png')
    }

    const handleCardHolder = (value) => {
        setCardHolder(value)
    }

    const handleExpireMonth = (value) => {
        setExpireMonth(value);
    }

    const handleExpireYear = (value) => {
        setExpireYear(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit} className='payment-page_form'>
            <CardImg 
                cardTypeUrl={cardTypeUrl}
                creditCardNumber={creditCardNumber}
                cardHolder={cardHolder}
                expireMonth={expireMonth}
                expireYear={expireYear}/>
            <FormInputs
                handleNumber={handleNumber}
                handleType={handleType}
                handleCardHolder={handleCardHolder}
                expireMonth={expireMonth}
                handleExpireMonth={handleExpireMonth}
                expireYear={expireYear}
                handleExpireYear={handleExpireYear}
                />
            <FormBtn cardType={cardType}/>
        </form>
    );
}

