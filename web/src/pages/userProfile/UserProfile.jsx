import React, { useState, useEffect } from "react";
import axios from "axios";

import { CircularProgress } from "@material-ui/core";

const UserProfile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/user")
            .then((res) => {
                setProfile({ ...res.data });
                setLoading(false);
            })
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <>
            <div>User Profile</div>
            {loading ? (
                <CircularProgress />
            ) : (
                <div>
                    <p>First Name: {profile.firstName}</p>
                    <p>Last Name: {profile.lastName}</p>
                    <p>Email: {profile.email}</p>
                </div>
            )}
        </>
    );
};

export default UserProfile;
