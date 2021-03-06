import React, { Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginForm from '../components/LoginForm/LoginForm';
import BlogInsert from '../components/BlogInsert/BlogInsert';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import SingleBlog from '../components/SingleBlog/SingleBlog';
import UserProfile from '../components/UserProfile/UserProfile';
import Profile from '../components/Profile/Profile';
import BlogUpdate from '../components/BlogUpdate/BlogUpdate';
import UserList from '../components/UserList/UserList';

export default function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/blogdetails/:id" component={SingleBlog}/>
                <Route exact path="/user" component={UserList}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/registration" component={RegistrationForm}/>
                <Route exact path="/addPost" component={BlogInsert}/>
                <Route exact path="/editPost/:id" component={BlogUpdate}/>
                <Route exact path="/userdetails/:id" component={UserProfile}/>
                <Route exact path="/profile" component={Profile}/>

            </Switch>
        </Fragment>
    );
}