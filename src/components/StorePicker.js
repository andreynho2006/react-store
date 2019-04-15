import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return(
            <form action="" className="store-selector">
                <h2>Plase enter a store</h2>
                { /* comment */ }
                <input type="text" required placeholder="Store name" defaultValue={getFunName()} />
                <button type="submit">Visit store</button>
            </form>           
        ); 
    }
}

export default StorePicker;