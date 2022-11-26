import React from 'react';
import { FormBtn } from '../FormBtn/FormBtn';
import { CardImg } from '../CardImg/CardImg'

export const Form = () => {
    return (
        <form className='payment-page_form'>
            <CardImg/>
            <FormBtn/>
        </form>
    );
}

