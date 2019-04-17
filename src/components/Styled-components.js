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

    .logoutButton {
        width: 25%;
        margin-bottom: 20px!important;
    }

    .loadSampleButton {
        width: 50%;
        padding: 25px;
    }

    .github {
        border: 0;
        display: block;
        margin-bottom: 2rem;
        width: 100%;
        color: #fff;
        padding: 2rem;
        background: #82d465;
    };

    .twitter {
        border: 0;
        display: block;
        margin-bottom: 2rem;
        width: 100%;
        color: #fff;
        padding: 2rem;
        background: #5cc437;
    }

    .facebook {
        border: 0;
        display: block;
        margin-bottom: 2rem;
        width: 100%;
        color: #fff;
        padding: 2rem;
        background: #3864a3;
    }

    .addFishButton {
        with: 100%;
        border: 0;
    }
    `;

const Form = styled.form`
    background: #fff;
    max-width: 500px;
    margin: 50px auto;
    padding: 2rem;
    border: 2px solid #000;

    .addEditForm {
        margin:0 0 20px 0;
        padding:0;
        width: 100%;
        max-width: 523px;
        border: 2px solid #000;
        overflow: hidden;
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
    }
    `;

const Input = styled.input`
    width: 100%;
    `;
const Textarea = styled.textarea`
    width: 100%;
    `;
const Select = styled.select`
    width: 100%;
    `;
const Option = styled.option`
    width: 100%;
    `;
const Div = styled.div`
    width: 100%;
    `;
const H2 = styled.h2`
    font-weight: bold;
`;
const Nav = styled.nav`
    display: block;
`;
const P = styled.p`
    display: block;
`;
export { Button, Form, Input, Textarea, Select, Option, H2, Nav, P, Div };