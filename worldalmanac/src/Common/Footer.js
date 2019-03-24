import React from 'react';
import styled from 'styled-components'

const FootContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: black;
    color: white;
    margin-bottom:5px;
`;
const FootText = styled.p`
    vertical-align: middle;
    font-weight:200;
    font-size: 15px;
`;

const Footer = () => {
    return (
        <FootContainer>
            <FootText>2019 Copyright &copy; My World Almanac</FootText>
        </FootContainer>
    );
}

export default Footer;