import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    text-transform: uppercase;
    background: none;
    border: 1px solid #000;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: Open Sans;
    -webkit-transition: all .2s;
    transition: all .2s;
    position: relative;
    z-index: 2;
    width: 100%;
    `;

const Form = styled.form`
    background: #fff;
    max-width: 500px;
    margin: 50px auto;
    padding: 2rem;
    border: 2px solid #000;
    `;

const Input = styled.input`
    width: 100%;
    `;

export { Button, Form, Input };