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

    [disabled] {
        color: #d12028;
        background: #fff;
        border-color: #d12028;
        width: 20%;
        -webkit-transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
                transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
    }
    [disabled]:hover {
        color: #d12028;
        cursor: not-allowed;
    }
    [disabled]:after {
        display: none;
    }
    :after {
        content: '';
        z-index: -1;
        display: block;
        background: #000;
        position: absolute;
        width: 100%;
        height: 0;
        left: 0;
        top: 0;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
    }
    :hover {
        color: #fff;
         outline: 0;
    }
    :focus {
        color: #fff;
         outline: 0;
    }
    :hover:after {
        height: 100%;
    }
    .warning:after {
        background: #d12028;
    }
    .success::after {
        background: #2dc22d;
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
const H1 = styled.h1`
    font-family: 'blanchcaps_inline', sans-serif;
    text-align: center;
    font-weight: normal;
    margin: 0;
`;
const H2 = styled.h2`
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
`;
const H3 = styled.h3`
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
    font-size: 3rem;

    .fish-name {
        margin: 0;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
                align-items: center;
    }
`;
const Nav = styled.nav`
    display: block;
`;
const P = styled.p`
    display: block;

    .menu-fish {
        margin: 0;
        font-size: 1.8rem;
    }
`;
const List = styled.li`
    display: block;
`;
const Image = styled.img`
    display: block;
    .img-menu-fish {
        float: left;
        width: 150px;
        margin-right: 1rem;
    }
`;
const Span = styled.span`
    display: block;

    .tagline {
        background: "#fff";
        position: relative;
        z-index: 2;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .ofThe, .of {
        padding-right: 2rem;
        position: relative;
        right: -0.5rem;
    }
    
    .price {
        font-size: 1.4rem;
        -webkit-box-pack: end;
        justify-content: flex-end;
    }
    
`;
const Strong = styled.strong`
    display: block;
`;
const HeaderTop = styled.header`
    text-align: center;
`;
const UnorderedList = styled.ul`
    text-align: center;
`;

export { Button, Form, Input, Textarea, Select, Option, H1, H2, H3, HeaderTop, Nav, P, Div, List, Span, Strong, Image, UnorderedList };