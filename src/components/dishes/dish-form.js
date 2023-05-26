import { React, useState } from "react";
import './dish-form.css'
import Input from "../input/input";
import PlusMinusInput from "../plusMinusInput/plusMinusInput";

const DishForm = () => {
    const additionalList = [
        { label: "Queijo cheddar", amount: "4,99" },
        { label: "Cebola crispy", amount: "1,50" },
        { label: "Molho cheddar", amount: "3,50" },
        { label: "Molho de picanha", amount: "3,50" }
    ]
    const handleSubmit = () => {
        alert("Funcionou")
    }

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
                <PlusMinusInput />
                <button className="btn-add" onClick={handleSubmit}>Adicionar</button>
            </div>
        </form>
    );
}

export default DishForm;