import React from "react";
import NavBar from "../navbar/NavBar";
import UserProfile from "../../pages/userProfile/UserProfile";
import UserEvents from "../userevents/UserEvents";
import EventsList from "../eventslist/EventsList";
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
      <UserProfile />
      <UserEvents />
      <EventsList />
    </>
  );
}

export default Layout;
