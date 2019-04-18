import React from 'react';
import styled from 'styled-components';
import { Div, Input, Button, Select, Textarea, Option } from './Styled-components';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    }
    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that fish
        // take a copy of the updated fish
        const updatedFish = { 
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        //console.log(updatedFish);
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (
            <Div className="fish-edit">
                <Input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <Input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <Select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status} >
                    <Option value="available">Fresh!</Option>
                    <Option value="unavailable">Sold Out!</Option>
                </Select>
                <Textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <Input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
                <Button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</Button>
            </Div>         
        );
    }
}

export default EditFishForm;