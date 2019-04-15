import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

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
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Plase enter a store</h2>
                { /* comment */ }
                <input  
                    type="text" 
                    ref = {this.myInput}
                    required
                    placeholder="Store name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit store</button>
            </form>           
        ); 
    }
}

export default StorePicker;