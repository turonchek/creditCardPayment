import React from 'react';
import './CardImgBody.css'

export const CardImgBody = ({creditCardNumber}) => {

    return (
        <div className="card-body">
            <h2 id="creditCardNumber">{creditCardNumber}</h2>
        </div>
    );
}

