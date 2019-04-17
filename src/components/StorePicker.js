import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';
import { Button, Form, Input, H2 } from './Styled-components';

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
                <H2>Plase enter a store</H2>
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