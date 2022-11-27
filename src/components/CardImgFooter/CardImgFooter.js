import React from 'react';
import './CardImgFooter.css'

export const CardImgFooter = ({cardHolder, expireMonth, expireYear}) => {
    return (
        <div className="card-footer">
            <div>
                <h5>Card Holder</h5>
                <h3>{cardHolder==="" ? "Your full name" : cardHolder}</h3>
            </div>
            <div>
                <h5>Expires</h5>
                <h3>{expireMonth} / {expireYear}</h3>
            </div>
        </div>
    );
}


