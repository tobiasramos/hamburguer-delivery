import { React, useState } from "react";
import './dish-form.css'
import Input from "../input/input";
import PlusMinusInput from "../plusMinusInput/plusMinusInput";

const DishForm = ({ dish, setDish }) => {
    const handleIngredient = (name, qtd) => {
        const updatedAdditionalList = dish.additionalList.map((additional) => {
            if (additional.label === name) {
                return { ...additional, qtd: qtd };
            }
            return additional;
        });
        setDish((prevDish) => ({ ...prevDish, additionalList: updatedAdditionalList }));
    };

    const handleSilverware = (name, qtd) => {
        const updatedSilverware = { ...dish.silverware, qtd: qtd };
        setDish((prevDish) => ({ ...prevDish, silverware: updatedSilverware }));
        console.log(updatedSilverware)
    };

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleTogglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    const [display, setDisplay] = useState('none');
    const [qtdPurchase, setQtdPurchase] = useState(0)
    const handleQtdPurchase = () => {
        if (!isPopoverOpen) setQtdPurchase(qtdPurchase + 1)
        setDisplay('block');
    };

    return (
        <div className="form" >
            <div className="warning">
                <span>Adicionar Ingredientes</span>
                <span>Até 8 ingredientes.</span>
            </div>
            <ul>
                {dish.additionalList.map((d, index) => (
                    <li key={index}><Input ingredient={d} handleIngredient={handleIngredient} /></li>
                ))}
                <li></li>
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

            <div className="popover-container">
                {isPopoverOpen && (
                    <div className="popover">
                        <h3 className="title">Adicionado com Sucesso</h3>
                        <p>Oferta Cheddar Bacon</p>
                        <span>Ingredientes:</span>
                        <ul>
                            {dish.additionalList.map((d, index) => (
                                <li key={index}><span>{d.qtd}</span><span>{d.label}</span></li>
                            ))}
                            <li><span>{dish.silverware.qtd}</span><span>{dish.silverware.label}</span></li>
                        </ul>
                    </div>
                )}

            </div>

            <div className="qtdPurchase" style={{ display: display }}>{qtdPurchase}</div>

            <div className="buttons">
                <PlusMinusInput name={dish.silverware.label} data={dish.silverware.qtd}
                    handleIngredient={handleSilverware} />
                <button className="btn-add" onClick={() => {
                    handleTogglePopover();
                    handleQtdPurchase()
                }}>Adicionar</button>
            </div>
        </div>
    );
}

export default DishForm;