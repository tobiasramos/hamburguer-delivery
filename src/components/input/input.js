import React from "react";
import PlusMinusInput from "../plusMinusInput/plusMinusInput";

const Input = (props) => {
    return (
        <div className="additional-container">
            <div className="additional">
                <label>{props.data.label}</label>
                <input type="text" value={"+ R$ " + props.data.amount} />
            </div>
            <PlusMinusInput data={props.data.qtd}/>
        </div>
    )
}

export default Input