import React from 'react';
import hamburguer from '../img/hamburguer.png'

const DishCard = () => {

    return (
        <div>
            <img src={hamburguer} />
            <h2>Oferta Picanha Cheddar Bacon</h2>
            <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar,
                molho cheddar e pão mix de gergelim
            </p>
            <div>
                <span>R$31,99</span>
                <span>R$34,95</span>
            </div>
        </div>
    );
}

export default DishCard;