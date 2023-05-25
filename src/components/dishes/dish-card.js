import React from 'react';
import hamburguer from '../img/hamburguer.png'
import './dish-card.css'

const DishCard = () => {

    return (
        <div className='container-dishCard'>
            <img className='hamburguerImage' src={hamburguer} alt='Imagem do hamburguer' />
            <div className='hamburgerDice'>
                <h2 className='title'>Oferta Picanha Cheddar Bacon</h2>
                <p className='description'>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar,
                    molho cheddar e pão mix de gergelim
                </p>
                <div className='price'>
                    <span className='currentPrice'>R$31,99</span>
                    <span className='oldPrice'>R$34,95</span>
                </div>
            </div>
        </div>
    );
}

export default DishCard;