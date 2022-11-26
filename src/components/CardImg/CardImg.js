import React from 'react';
import { CardImgBody } from '../CardImgBody/CardImgBody';
import { CardImgHeader } from '../CardImgHeader/CardImgHeader';
import './CardImg.css'

export const CardImg = () => {
    return (
        <div className='payment-page_card'>
            <CardImgHeader/>
            <CardImgBody/>
        </div>
    );
}

