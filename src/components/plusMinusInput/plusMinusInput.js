import React, { useState } from "react";
import plus from '../img/icon-plus.png'
import minus from '../img/icon-minus.png'

const PlusMinusInput = (props) => {
    const [num, setNum] = useState(props.data)

    const descrease = () => {
        setNum(num - 1)
        props.handleIngredient(props.name, num - 1)
    }

    const incrase = () => {
        setNum(num + 1)
        props.handleIngredient(props.name, num + 1)
    }

    return (
        < div className="buttonsPlusMinus" >
            <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' onClick={descrease} />
            <div>{num}</div>
            <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade' onClick={incrase}></img>
        </div >
    )
}

export default PlusMinusInput