import React from 'react';
import { FormBtn } from '../FormBtn/FormBtn';
import { CardImg } from '../CardImg/CardImg'
import { FormInputs } from '../FormInputs/FormInputs';
import './Form.css'

export const Form = () => {
    return (
        <form className='payment-page_form'>
            <CardImg/>
            <FormInputs/>
            <FormBtn/>
        </form>
    );
}

