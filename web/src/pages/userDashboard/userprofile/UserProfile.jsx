import React from "react";

const UserProfile = ({ profile }) => {
    return (
        <>
            <div>User Profile</div>
            <div>
                <p>First Name: {profile.firstName}</p>
                <p>Last Name: {profile.lastName}</p>
                <p>Email: {profile.email}</p>
            </div>
        </>
    );
};

export default UserProfile;
