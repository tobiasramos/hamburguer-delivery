import React, { useState } from "react";
import plus from '../img/icon-plus.png'
import minus from '../img/icon-minus.png'

const PlusMinusInput = (props) => {
    const [num, setNum] = useState(props.data)
    return (
        < div className="buttonsPlusMinus" >
            <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' onClick={() => {
                setNum(num - 1)
            }} />
            <div>{num}</div>
            <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade' onClick={() => {
                setNum(num + 1)
            }}></img>
        </div >
    )
}

export default PlusMinusInput