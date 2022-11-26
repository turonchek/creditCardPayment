import React from 'react';
import './CardImgHeader.css'

export const CardImgHeader = () => {
    return (
        <div className="card-header">
            <div className="card-header__sticker"></div>
                <div>
                    <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" alt="Card logo"/>
                </div>
        </div>
    );
}
