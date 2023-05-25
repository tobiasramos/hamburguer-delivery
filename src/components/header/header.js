import { React } from "react";

const Header = () => {
    return (
        <div>
            <img src={logo} />
            <span>Entrega: R. Antonio Braune, 222</span>
            <input placeholder="Busque por estabelecimento ou produtos" />
            <img  /><span>ENTRAR</span>
            <img  /><span>Carrinho</span>
        </div>
    );
}


export default Header;