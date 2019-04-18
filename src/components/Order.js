import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { H2, Div, List, Button, Span, Strong } from './Styled-components';
import PropTypes from 'prop-types';

const ButtonRemoveFish = styled(Button)`
    float: right;
    width: 20px;
`;

class Order extends React.Component {
    static propTypes ={
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    }
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        // make sure the fish is loaded before we continue
        if(!fish) return null;
        
        if(!isAvailable) {
            return (
                <CSSTransition 
                    classNames="order" 
                    key={key} 
                    timeout={{ enter: 500, exit: 500 }}>
                    <List key={key}>
                        Sorry {fish ? fish.name : 'fish'} is no longer available
                    </List>
                </CSSTransition>
            );
        }
        return (
        <CSSTransition 
            classNames="order" 
            key={key} 
            timeout={{ enter: 250, exit: 250 }}>
                <List key={key}>
                <Span>
                    <TransitionGroup component="span" className="count">
                        <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                            <Span>{count}</Span>
                        </CSSTransition>
                    </TransitionGroup>
                        lbs {fish.name}
                        {formatPrice(fish.price)}
                        <ButtonRemoveFish onClick={() => this.props.removeFromOrder(key)}>&times;</ButtonRemoveFish>
                    </Span>
                </List>
        </CSSTransition>
        );    
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <Div className="order-wrap">
                <H2>Order</H2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <Div className="total">
                    <Strong>Total:{formatPrice(total)}</Strong>
                </Div>
            </Div>
        );
    }
}

export default Order;