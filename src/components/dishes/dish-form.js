import { React } from "react";
import './dish-form.css'
import plus from '../img/icon-plus.png'
import minus from '../img/icon-minus.png'

const DishForm = () => {
    return (
        <form className="form">
            <div className="warning">
                <span>Adicionar Ingredientes</span>
                <span>Até 8 ingredientes.</span>
            </div>
            <div className="additional-container">
                <div className="additional">
                    <label>Queijo cheddar</label>
                    <input value={"+ R$4,99"} />
                </div>
                <div className="buttonsPlusMinus">
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' />
                    <div>0</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade'></img>
                </div>
            </div>

            <div className="additional-container">
                <div className="additional">
                    <label>Cebola crispy</label>
                    <input value={"+ R$1,50"} />
                </div>

                <div className="buttonsPlusMinus">
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' />
                    <div>0</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade'></img>
                </div>
            </div>

            <div className="additional-container">
                <div className="additional">
                    <label>Molho cheddar</label>
                    <input value={"+ R$3,50"} />
                </div>

                <div className="buttonsPlusMinus">
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' />
                    <div>0</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade'></img>
                </div>
            </div>

            <div className="additional-container">
                <div className="additional">
                    <label>Molho de picanha</label>
                    <input value={"+ R$3,50"} />
                </div>

                <div className="buttonsPlusMinus">
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' />
                    <div>0</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade'></img>
                </div>
            </div>

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
                    <img src={minus} className="btn-minus" alt='Botão de diminuir a quantidade' />
                    <div>0</div>
                    <img src={plus} className="btn-plus" alt='Botão de aumentar a quantidade'></img>
                </div>
                <button className="btn-add">Adicionar</button>
            </div>
        </form>
    );
}

export default DishForm;