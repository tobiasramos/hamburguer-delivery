import { React } from "react";
import './main.css'
import DishCard from '../dishes/dish-card'
import DishFom from '../dishes/dish-form'

const Main = () => {
    const dish = {
        title: "Oferta Picanha Cheddar Bacon",
        description: "Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim",
        currentPrice: "R$31,99",
        oldPrice: "R$34,95",
        additionalList: [
            { label: "Queijo cheddar", amount: "4,99", qtd: 0 },
            { label: "Cebola crispy", amount: "1,50", qtd: 0 },
            { label: "Molho cheddar", amount: "3,50", qtd: 0 },
            { label: "Molho de picanha", amount: "3,50", qtd: 0 }
        ],
        silverware: 0
    }

    return (
        <div className="container">
            <DishCard data={dish} />
            <DishFom data={dish} />
        </div>
    );
}

export default Main;