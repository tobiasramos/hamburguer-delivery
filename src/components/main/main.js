import { React } from "react";
import './main.css'
import DishCard from '../dishes/dish-card'
import DishFom from '../dishes/dish-form'

const Main = () => {
    return (
        <div className="container">
            <DishCard />
            <DishFom />
        </div>
    );
}

export default Main;