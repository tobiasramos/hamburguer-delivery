import React from 'react';
import hamburguer from '../img/hamburguer.png'
import './dish-card.css'

const DishCard = (props) => {
    return (
        <div className='container-dishCard' >
            <img className='hamburguerImage' src={hamburguer} alt='Imagem do hamburguer' />
            <div className='hamburgerDice'>
                <h2 className='title'>{props.data.title}</h2>
                <p className='description'>{props.data.description}</p>
                <div className='price'>
                    <span className='currentPrice'>{props.data.currentPrice}</span>
                    <span className='oldPrice'>{props.data.oldPrice}</span>
                </div>
            </div>
        </div >
    );
}

export default DishCard;