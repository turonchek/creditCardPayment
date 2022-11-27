import React from 'react';
import './CardImgFooter.css'

export const CardImgFooter = ({cardHolder, expireMonth}) => {
    return (
        <div className="card-footer">
            <div>
                <h5>Card Holder</h5>
                <h3>{cardHolder}</h3>
            </div>
            <div>
                <h5>Expires</h5>
                <h3>{expireMonth} / 2023</h3>
            </div>
        </div>
    );
}


