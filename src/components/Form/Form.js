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

    const handleNumber = (e) => {
        setCreditCardNumber(e.target.rawValue);
    }

    const handleType = (type) => {
        setCardType(type);

        let newCardTypeUrl = imageUrls.find( item => item.name === type )
        
        setCardTypeUrl(newCardTypeUrl ? newCardTypeUrl.value : 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png')
    }


    return (
        <form className='payment-page_form'>
            <CardImg 
                cardTypeUrl={cardTypeUrl}
                creditCardNumber={creditCardNumber}/>
            <FormInputs
                handleNumber={handleNumber}
                handleType={handleType}/>
            <FormBtn cardType={cardType}/>
        </form>
    );
}

