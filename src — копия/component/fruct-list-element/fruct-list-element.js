import React from 'react';
import './fruct-list-element.css'

const FrunctListElement = ({id, title, price, infoDiscount: { discription }, coverImage, onAddToCart}) => {
    return (
        <div className="element-product">
            <div className="fruct-cover">
                <img src={coverImage} alt={`cover ${title}`}></img>
            </div>
            <div className="fruct-details">  
                <span className="fruct-title"><span>{title}</span></span>
                <div className="fruct-price">${price}</div>
                <div className="fruct-price">1 kilogram</div>
                <div className="fruct-discription">{discription}</div>
                <button 
                    onClick={() => onAddToCart(id)}
                    className="add-to-cart">Add to cart</button>
            </div>  
          
        </div>
    );
}

export default FrunctListElement;