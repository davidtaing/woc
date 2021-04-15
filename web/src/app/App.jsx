import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Layout from "../components/layout/Layout";
import * as Pages from "../pages/Pages";

/* 
    TODO: 
    [ ] set up auth containers
    [ ] set up roles containers
    [ ] set up auth context
*/

const App = ({ status, msg }) => {
    return (
        <BrowserRouter>
            <Layout>
                {/* routing */}
                <Route exact path="/" component={() => <Pages.Landing status={status} msg={msg} color="green" />} />
                <Route path="/user" component={Pages.UserDashBoard} />
                <Route path="/login" component={Pages.Login} />
                <Route path="/register" component={Pages.Register} />
            </Layout>
        </BrowserRouter>
    );
};

App.propTypes = {
    msg: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default App;
