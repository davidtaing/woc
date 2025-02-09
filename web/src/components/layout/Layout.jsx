import React from "react";
import NavBar from "components/navbar/NavBar";
import { Container } from "@material-ui/core";
/* 
    Layout component handling common layout for all pages

    currently only handling the navigation bar

*/

// main layout with nav and footer
export const Layout = ({ status, children }) => {
    return (
        <>
            <NavBar position="fixed" />
            {children}
        </>
    );
};

// layout for user dashboard
export const LayoutUserDashboard = ({ children }) => {
    return (
        <Container style={{ marginRight: "35px", marginLeft: "35px" }} maxWidth={false}>
            {children}
        </Container>
    );
};
