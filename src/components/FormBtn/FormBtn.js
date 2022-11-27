import React from 'react';
import './FormBtn.css'

export const FormBtn = ({cardType}) => {
    return (
        <button 
            className='payment-page_btn' >
                {cardType==="unknown" || cardType==="uatp" ? 'Can not submit this card' : `Submit ${cardType} payment`}
        </button>
    );
}
