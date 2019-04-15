import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

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

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        }); 
    }


    render() {       
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish   
                                key={key} 
                                index = {key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>    
            </div>
        );
    }
}

export default App;