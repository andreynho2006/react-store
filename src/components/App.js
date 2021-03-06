import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import styled from 'styled-components';
import { Div, UnorderedList } from './Styled-components';
import base from '../base';
import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object 
    }

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef= localStorage.getItem(params.storeId);
        //console.log(localStorageRef);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef )});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        //console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    addFish = fish => {
        //take a copy of the existing state
        const fishes = {...this.state.fishes};
        //add our new fish to that fishes var
        fishes[`fish${Date.now()}`] = fish;
        //set the new fishes object to state
        this.setState({
            fishes: fishes  //(fishes)
        });
    };

    updateFish = (key, updatedFish) => {
        //take a copy of the current state
        const fishes = { ...this.state.fishes };
        //update that state
        fishes[key] = updatedFish;
        //set that to state
        this.setState({ fishes: fishes});
    }

    deleteFish = (key) => {
        // take a copy of state
        const fishes = { ...this.state.fishes };
        //update the state
        fishes[key] = null;
        //update the state
        this.setState({ fishes });
    }

    addToOrder = (key) => {
        //take a copy of state
        const order = {...this.state.order};
        //either add to the order or update the number in the order
        order[key] = order[key] + 1 || 1;
        //call setState to update our state object
        this.setState({
            order: order
        });
    }

    removeFromOrder = key => {
        // take a copy of state
        const order = { ...this.state.order };
        //remove the item from the order
        delete order[key];
        //update the state
        this.setState({ order });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        }); 
    }


    render() {       
        return (
            <Div className="catch-of-the-day">
                <Div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <UnorderedList className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish   
                                key={key} 
                                index = {key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </UnorderedList>
                </Div>
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder = {this.removeFromOrder}
                />
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}   
                    storeId={this.props.match.params.storeId}                
                />    
            </Div>
        );
    }
}

export default App;