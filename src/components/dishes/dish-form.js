import { React, useState } from "react";
import './dish-form.css'
import plus from '../img/icon-plus.png'
import minus from '../img/icon-minus.png'
import Input from "../input/input";

const DishForm = () => {
    const [num, setNum] = useState(0)
    const additionalList = [
        { label: "Queijo cheddar", amount: "4,99" },
        { label: "Cebola crispy", amount: "1,50" },
        { label: "Molho cheddar", amount: "3,50" },
        { label: "Molho de picanha", amount: "3,50" }
    ]
    return (
        <form className="form">
            <div className="warning">
                <span>Adicionar Ingredientes</span>
                <span>Até 8 ingredientes.</span>
            </div>
            <ul>
                {additionalList.map((dish, index) => (
                    <li key={index}><Input data={dish} /></li>
                ))}
            </ul>

            <div className="cutlery">
                <span>Precisa de Talher?</span>
                <div className="yes">
                    <label for="yes">Sim</label>
                    <input type="radio" name="option" value={"sim"} />
                </div>
                <div className="no">
                    <label for="no">Não</label>
                    <input type="radio" name="option" value={"não"} />
                </div>
            </div>

            <div className="buttons">
                <div className="buttonsPlusMinus">
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' onClick={() => {
                        setNum(num - 1)
                    }} />
                    <div>{num}</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade' onClick={() => {
                        setNum(num + 1)
                    }}></img>
                </div>
                <button className="btn-add">Adicionar</button>
            </div>
        </form>
    );
}

export default DishForm;