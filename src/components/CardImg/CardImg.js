import React from 'react';
import { CardImgBody } from '../CardImgBody/CardImgBody';
import { CardImgFooter } from '../CardImgFooter/CardImgFooter';
import { CardImgHeader } from '../CardImgHeader/CardImgHeader';
import './CardImg.css'

export const CardImg = ({creditCardNumber,cardTypeUrl,cardHolder}) => {

    return (
        <div className='payment-page_card'>
            <CardImgHeader cardTypeUrl={cardTypeUrl}/>
            <CardImgBody creditCardNumber={creditCardNumber}/>
            <CardImgFooter cardHolder={cardHolder}/>
        </div>
    );
}

