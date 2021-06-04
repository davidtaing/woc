import React from "react";
import NavBar from "../navbar/NavBar";
import UserProfile from "../../pages/userProfile/UserProfile";
import UserEvents from "../userevents/UserEvents";
import UserCourses from "../usercourses/UserCourses";
import {Container} from "@material-ui/core";
/* 
    Layout component handling common layout for all pages

    currently only handling the navigation bar

*/

const Layout = ({ status, children }) => {
    return (
        <>
            <NavBar />
            <>{children}</>
        </>
    );
};

export const LayoutUserDashboard = () => {
  return (
    <>
      <Container maxWidth="sm" >
        <UserProfile />
        <UserEvents />
        <UserCourses />
      </Container>

    </>
  );
}

export default Layout;
