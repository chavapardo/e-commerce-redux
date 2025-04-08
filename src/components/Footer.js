import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #a5cde2;
    color: #000000;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 1rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2025 Maddie-Nero Todos los derechos reservados.</FooterText>
        </FooterContainer>
    );
};

export default Footer;