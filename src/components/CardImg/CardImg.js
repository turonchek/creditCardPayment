import React from 'react';
import { CardImgBody } from '../CardImgBody/CardImgBody';
import { CardImgFooter } from '../CardImgFooter/CardImgFooter';
import { CardImgHeader } from '../CardImgHeader/CardImgHeader';
import './CardImg.css'

export const CardImg = () => {
    return (
        <div className='payment-page_card'>
            <CardImgHeader/>
            <CardImgBody/>
            <CardImgFooter/>
        </div>
    );
}

