import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        // Stop the form from submiting
        event.preventDefault();
        // get the text from that input
        console.log(this.myInput);
        const storeName = this.myInput.defaultValue;
        // change the page to store/......
        this.props.history.push(`/store/${this.storeName}`);
        
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