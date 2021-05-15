import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ component: Component, ...rest }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    // call server to check token
    const checkToken = () => {};
    useEffect(() => {
        axios
            .get("/api/auth")
            .then((res) => {
                console.log(res.data);
                // setLoggedIn(true);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    // redirect to login if not authenticated
    const access = (props) => {
        return loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { referer: props.location },
                }}
            />
        );
    };

    return <Route {...rest} render={access} />;
};

export default UserRoute;
