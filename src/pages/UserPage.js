import React, { Component } from 'react';
import UserList from '../components/UserList/UserList';
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

class UserPage extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <UserList/>
                <Footer/>
            </div>
        );
    }
}

export default UserPage;