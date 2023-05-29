import { React } from "react";
import logo from '../img/logo.png'
import './header.css'
import userImage from '../img/userCircle.png'
import cartImage from '../img/shoppingCart.png'

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo da empresa" />
            <div className="delivery">
                <span>Entrega:</span>
                <p>Entrega: R. Antonio Braune, 222</p>
            </div>
            <div className="search">
                <input type="text" placeholder="Busque por estabelecimento ou produtos" />
            </div>
            <div className="data">
                <div className="userCircle">
                    <img className="userImage" src={userImage} /><button>ENTRAR</button>
                </div>
                <div>
                    <img className="cartImage" src={cartImage} /><button>Carrinho</button>
                </div>
            </div>
        </header>
    );
}


export default Header;