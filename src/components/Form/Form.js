import React, { useState } from 'react';
import { FormBtn } from '../FormBtn/FormBtn';
import { CardImg } from '../CardImg/CardImg'
import { FormInputs } from '../FormInputs/FormInputs';
import { imageUrls } from '../../utils';
import './Form.css'
import { CardImgHeader } from '../CardImgHeader/CardImgHeader';
import { CardImgBody } from '../CardImgBody/CardImgBody';
import { CardImgFooter } from '../CardImgFooter/CardImgFooter';



export const Form = () => {

    const [creditCardNumber, setCreditCardNumber] = useState('#### #### #### ####');
    const [cardType, setCardType] = useState('');
    const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');

    const [inputState, setInputState] = useState({
        cardHolder:'',
        expireMonth:'mm',
        expireYear:'yyyy'
    });

    const handleNumber = (e) => {
        setCreditCardNumber(e.target.rawValue);
    }

    const handleType = (type) => {
        setCardType(type);

        let newCardTypeUrl = imageUrls.find( item => item.name === type )
        
        setCardTypeUrl(newCardTypeUrl ? newCardTypeUrl.value : 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png')
    }

    const handleInputState = (evt) => {
        const value = evt.target.value;
        setInputState({
            ...inputState,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className='payment-page_form'>
            <CardImg>
                <CardImgHeader cardTypeUrl={cardTypeUrl}/>
                <CardImgBody creditCardNumber={creditCardNumber}/>
                <CardImgFooter 
                    cardHolder={inputState.cardHolder}
                    expireMonth={inputState.expireMonth}
                    expireYear={inputState.expireYear}/>
            </CardImg>
            <FormInputs
                handleNumber={handleNumber}
                handleType={handleType}
                handleInputState={handleInputState}
                cardHolder={inputState.cardHolder}
                expireMonth={inputState.expireMonth}
                expireYear={inputState.expireYear}
                />
            <FormBtn cardType={cardType}/>
        </form>
    );
}

