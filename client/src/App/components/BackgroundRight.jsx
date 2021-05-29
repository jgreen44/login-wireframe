import React from 'react';
import styled from 'styled-components';
import image from '../image/KK17110_Pink.jpg';

export const BackgroundRight = (props) => {
    return <BackgroundRightWrapper>
    </BackgroundRightWrapper>
};

const BackgroundRightWrapper = styled.div`
    background-image: url("${image}"); 
    background-repeat: repeat;
    position: fixed;
    left: 40%;
    width: 60%;
    height: 100%;
`;
