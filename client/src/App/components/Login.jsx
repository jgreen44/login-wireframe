import React from 'react';
import styled from 'styled-components';
import { TextField } from './TextField';
import { LoginButton } from './LoginButton';

export const Login = (props) => {
    return <LoginWrapper>
        <EmailWrapper><TextField label="Email address"></TextField></EmailWrapper>
        <PasswordWrapper><TextField label="Password"></TextField></PasswordWrapper>
        <LoginButton text="Login"></LoginButton>
    </LoginWrapper>
};

const LoginWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #ECECEC;
`;

const EmailWrapper = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const PasswordWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
