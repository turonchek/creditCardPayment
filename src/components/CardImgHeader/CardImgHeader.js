import React from 'react';
import './CardImgHeader.css'

export const CardImgHeader = ({cardTypeUrl}) => {
    return (
        <div className="card-header">
            <div className="card-header__sticker"></div>
                <div>
                    <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                </div>
        </div>
    );
}
