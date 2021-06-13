import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

import "./App.css";
import UserRoute from "./authWrapper/UserRoute";
import { Layout } from "../components/layout/Layout";
import * as Pages from "../pages/Pages";

/* 
    TODO: 
    [x] set up auth containers
    [ ] set up admin containers
    [ ] set up auth context
*/

// Protected pages will call server twice
// one to verify
// one to load data
// one way to improve is to add user data into context

const App = () => {
    // might still need context for this
    // need to find a simple way for dev mode
    const { loggedIn } = useAuth();

    const HomePage = () => {
        return loggedIn ? (
            <UserRoute exact path="/" component={Pages.UserDashBoard} />
        ) : (
            <Route exact path="/" component={Pages.Landing} />
        );
    };

    return (
        <BrowserRouter>
            <Layout>
                <HomePage />
                <Route path="/user" component={Pages.UserDashBoard} />
                <Route path="/login" component={Pages.Login} />
                <Route path="/signUp" component={Pages.SignUp} />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
