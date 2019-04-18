import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import styled from 'styled-components';
import { Button, Div, H2, P } from './Styled-components';
import PropTypes from 'prop-types';
import base, { firebaseApp } from '../base';
import firebase from 'firebase';

const LogoutButton = styled(Button)`
    width: 25%;
    margin-bottom: 20px;
`;

const LoadSampleButton = styled(Button)`
    width: 50%;
    padding: 25px;
`;

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    state = {
        uid: null,
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({ user });
            }
        })
    }

    authHandler = async authData => {
        //look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context : this });
        //claim it if there is no owner
        if(!store.owner) {
            //save it as our own
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        };
        // set the state of the inventory component to reflect the current user
        this.setState ({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        });
    }

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        console.log("Logging out!!");
        await firebase.auth().signOut();
        this.setState({ uid: null });
    }

    render() {
        const logout = <LogoutButton onClick={this.logout}>Log Out</LogoutButton>
        //check if they are log in
        if(!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        } 
        
        // check if they are not the owner of the store
        if(this.state.uid !== this.state.owner) {
            return (
                <Div>
                    <P>Sorry you are not the owner!!</P>
                    {logout}
                </Div>    
            )
        } 

        // They must be the owner, render the inventory
        return (
            <Div>
                <H2>Inventory</H2>
                {logout}
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm 
                        key={key} 
                        index={key} 
                        fish={this.props.fishes[key]} 
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}
                <AddFishForm addFish={this.props.addFish}/>
                <LoadSampleButton onClick={this.props.loadSampleFishes}>Load Sample Fishes</LoadSampleButton>
            </Div>           
        );
    }
}

export default Inventory;