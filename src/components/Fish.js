import React from 'react';
import styled from 'styled-components';
import { List, H3, Button, Span, P, Image } from './Styled-components';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
    }

    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        const price = this.props.details.price;
        const desc = this.props.details.desc;
        const status = this.props.details.status;
        const isAvailable = status === 'available';
        return (
            <List className="menu-fish">
                <Image className="img-menu-fish" src={image} alt={name} />
                <H3 className="fish-name">
                    {name}
                    <Span className="price">{formatPrice(price)}</Span>
                </H3>
                <P>{desc}</P>
                <Button
                    disabled={!isAvailable} 
                    onClick={() =>
                    this.props.addToOrder(this.props.index)}
                >
                    {isAvailable ? "Add to order" : "Sold out"}</Button>
            </List>          
        );
    }
}

export default Fish;