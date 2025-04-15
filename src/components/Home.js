import React from 'react';
import styled from 'styled-components';
import PromoImagePublic from '../assets/images/Banner horizontal tienda ropa Moda colorida.jpg';

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -5rem;
`;

const PromoImage = styled.img`
    width: 100%;
    height: 40rem;
    margin-top: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `;





const Home = () => {
    return (
        <HomeContainer>
            <PromoImage src={PromoImagePublic} alt="Promo" />
        </HomeContainer>
    );
};

export default Home;