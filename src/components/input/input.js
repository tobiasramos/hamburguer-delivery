import React from "react";
import PlusMinusInput from "../plusMinusInput/plusMinusInput";

const Input = ({ ingredient, handleIngredient }) => {
    return (
        <div className="additional-container">
            <div className="additional">
                <label>{ingredient.label}</label>
                <input type="text" value={"+ R$ " + ingredient.amount} readOnly={true} />
            </div>
            <PlusMinusInput name={ingredient.label} data={ingredient.qtd} handleIngredient={handleIngredient} />
        </div>
    )
}

export default Input