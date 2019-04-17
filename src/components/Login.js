import React from 'react';
import { Button, H2 } from './Styled-components';
import PropTypes from 'prop-types';



const Login = (props) => (
    <nav className="login">
        <H2>Inventory Login</H2>
        <p>Sign in to manage your store's inventory.</p>
        <Button 
            className="github"
            onClick={() => props.authenticate("Github")}
        >
            Log in With Github
        </Button>
        <Button 
            className="twitter" 
            onClick={() => props.authenticate("Twitter")}
        >
            Log in With Twitter
        </Button>
        <Button  
            className="facebook"
            onClick={() => props.authenticate("Facebook")}
        >
            Log in With Facebook
        </Button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};


export default Login;