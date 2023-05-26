import { React, useState } from "react";
import './dish-form.css'
import Input from "../input/input";
import PlusMinusInput from "../plusMinusInput/plusMinusInput";

const DishForm = (props) => {
    const handleSubmit = (data, event) => {
        console.log(props)
    }

    return (
        <div className="form" >
            <div className="warning">
                <span>Adicionar Ingredientes</span>
                <span>Até 8 ingredientes.</span>
            </div>
            <ul>
                {props.data.additionalList.map((dish, index) => (
                    <li key={index}><Input data={dish} /></li>
                ))}
            </ul>

            <div className="cutlery">
                <span className="title">Precisa de Talher?</span>
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
                <PlusMinusInput data={props.data.silverware} onChange={handleSubmit } />
                <button className="btn-add" onClick={handleSubmit}>Adicionar</button>
            </div>
        </div>
    );
}

export default DishForm;