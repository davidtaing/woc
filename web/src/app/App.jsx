import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import UserRoute from "./authWrapper/UserRoute";
import Layout from "../components/layout/Layout";
import * as Pages from "../pages/Pages";

/* 
    TODO: 
    [ ] set up auth containers
    [ ] set up roles containers
    [ ] set up auth context
*/

const App = () => {
    // might still need context for this
    let loggedIn = false;
    const HomePage = () => {
        return loggedIn ? (
            <UserRoute exact path="/" component={Pages.UserDashBoard} />
        ) : (
            <Route exact path="/" component={() => <Pages.Landing />} />
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
