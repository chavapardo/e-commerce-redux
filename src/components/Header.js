import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono correcto
import CartIcon from '../assets/images/cart-shopping-fast-svgrepo-com.svg';
import LogeoIcon from '../assets/images/profile-svgrepo-com.svg';
import LogoHome from '../assets/images/logo-transparent.png';



const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:rgb(255, 255, 255);
    width: 100%;
    background-color: #a5cde2;
`;

const Logo = styled.div`
    display: flex;  

    img{
        width: 125px;
        height: 100px;

    }

    `;



const SecondaryNav = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }

    a {
        color:rgb(79, 79, 79);
        text-decoration: none;
        font-weight: bold;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        margin-left: 20px;
    }

    a {
        color: #000000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const InputBuscarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto; /* Mueve el input más a la derecha */
`;

const Input = styled.input`
    width: 200px;
    padding: 10px 40px 10px 20px; /* Espacio para el ícono */
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const IconWrapper = styled.div`
    position: absolute;
    right: 10px; /* Posiciona el ícono hacia la derecha */
    pointer-events: none; /* Evita que el ícono interfiera con el clic en el input */
`;

const CartButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    img {
        width: 24px;
        height: 24px;
    }
`;


const LogeoButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    img {
        width: 24px;    
        height: 24px;
    }
`;

const CartDropdown = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    width: 300px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1000;
`;

const Header = () => {
    const [cartVisible, setCartVisible] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    const removeItemFromCart = (productId, event) => {
        event.stopPropagation(); // Detener la propagación del evento
        dispatch(removeFromCart(productId));
    };

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo>
                    <img src={LogoHome} alt="Logo" />
                </Logo>
            </Link>

            <SecondaryNav>
                <ul>
                    <li><Link to="../components/Alimentos.js">Alimentos</Link></li>
                    <li><Link to="">Premios</Link></li>
                    <li><Link to="">Accesosios</Link></li>
                    <li><Link to="">Ofertas</Link></li>
                </ul>
            </SecondaryNav>

            <Nav>
                <InputBuscarContainer>
                    <Input type="text" placeholder="Buscar..." />
                    <IconWrapper>
                        <FontAwesomeIcon icon={faSearch} />
                    </IconWrapper>
                </InputBuscarContainer>
                <ul>
                    <li>
                        <CartButton onClick={toggleCartVisibility}>
                            <img src={CartIcon} alt="Cart" />
                            {cartVisible && (
                                <CartDropdown>
                                    <h2>Carrito Compras</h2>
                                    <ul>
                                        {cart.map(product => (
                                            <li key={product.id}>
                                                {product.name} - ${product.price}
                                                <button onClick={(event) => removeItemFromCart(product.id, event)}>Eliminar</button>
                                            </li>
                                        ))}
                                    </ul>
                                </CartDropdown>
                            )}
                        </CartButton>
                    </li>
                    <li>
                        <LogeoButton>
                            <img src={LogeoIcon} alt="Logeo" />
                        </LogeoButton>
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;