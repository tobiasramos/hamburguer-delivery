import React, { useState } from "react";
import plus from '../img/icon-plus.png'
import minus from '../img/icon-minus.png'

const Input = (props) => {
    const [num, setNum] = useState(0)

    return (
        <div className="additional-container">
            <div className="additional">
                <label>{props.data.label}</label>
                <input type="text" value={"+ R$ " + props.data.amount} />
            </div>
            <div className="buttonsPlusMinus">
                <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' onClick={() => {
                    setNum(num - 1)
                }} />
                <div>{num}</div>
                <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade' onClick={() => {
                    setNum(num + 1)
                }}></img>
            </div>
        </div>
    )
}

export default Input