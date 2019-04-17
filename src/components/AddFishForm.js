import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Textarea, Select, Option } from './Styled-components';
import PropTypes from 'prop-types';

const AddFishButton = styled(Button)`
    with: 100%;
    border: 0;
`;
const AddEditForm = styled(Form)`
    margin:0 0 20px 0;
    padding:0;
    width: 100%;
    max-width: 523px;
    border: 2px solid #000;
    overflow: hidden;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
`;
const InputForm = styled(Input)`
    width: 33.33%;
    padding: 10px;
    line-height: 1;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    -webkit-appearance: none;
    -moz-appearance: none;
            appearance: none;
    border-radius: 0;
    background: #fff;

    :focus {
        outline: 0;
        background: #fef2de;
    }
`;
const InputImage = styled(InputForm)`
    width: 100%;

    :focus {
        outline: 0;
        background: #fef2de;
    }
`;
const TextareForm = styled(Textarea)`
    width: 100%%;
    padding: 10px;
    line-height: 1;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    -webkit-appearance: none;
    -moz-appearance: none;
            appearance: none;
    border-radius: 0;
    background: #fff;

    :focus {
        outline: 0;
        background: #fef2de;
    }
`;
const SelectForm = styled(Select)`
    width: 33.33%;
    padding: 10px;
    line-height: 1;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    -webkit-appearance: none;
    -moz-appearance: none;
            appearance: none;
    border-radius: 0;
    background: #fff;

    :focus {
        outline: 0;
        background: #fef2de;
    }
`;

class AddFishForm extends React.Component {
    nameRef= React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    }

    createFish = event => {
        //stop form from submitting
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        //refresh the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <AddEditForm onSubmit={this.createFish}>
                <InputForm name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <InputForm name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <SelectForm name="status" ref={this.statusRef}>
                    <Option value="available">Fresh!</Option>
                    <Option value="unavailable">Sold out</Option>
                </SelectForm>
                <TextareForm name="desc" ref={this.descRef} type="text" placeholder="Desc" />
                <InputImage name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <AddFishButton type="submit"> + Add Fish</AddFishButton>
            </AddEditForm>       
        );
    }
}

export default AddFishForm;