import React from 'react';
import styled from 'styled-components';
import logo from '../image/KK_Logo.png';

export const BackgroundLogo = (props) => {
    return <BackgroundLogoWrapper>
    </BackgroundLogoWrapper>
};

const BackgroundLogoWrapper = styled.div`
    background-image: url("${logo}"); 
    background-repeat: repeat;
    position: fixed;
    width: 40%;
    height: 100%;
`;
