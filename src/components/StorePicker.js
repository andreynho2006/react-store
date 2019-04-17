import React from 'react';
import styled from 'styled-components'
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

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

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    goToStore = event => {
        // Stop the form from submiting
        event.preventDefault();
        // get the text from that input
        console.log(this.myInput);
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
        
    }
    render() {
        return(
            <Form action="" onSubmit={this.goToStore}>
                <h2>Plase enter a store</h2>
                { /* comment */ }
                <Input  
                    type="text" 
                    ref = {this.myInput}
                    required
                    placeholder="Store name" 
                    defaultValue={getFunName()} 
                />
                <Button type="submit">Visit store</Button>
            </Form>           
        ); 
    }
}

export default StorePicker;