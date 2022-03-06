import React, { useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import styles from "./UserProfile.style";
import picture from "./profilepic.jpg";

const UserProfile = ({ profile }) => {
    const classes = styles();
    setFakeProfileData();

    const [firstName] = useState(profile.firstName || "");
    const [lastName] = useState(profile.lastName || "");
    const [skills] = useState(profile.skills || "");

    //TODO:: get this data from database
    function setFakeProfileData() {
        profile.skills = ["Project Management", "Web", "React", "User Experience", "Software Engineering"];
        profile.userSummary =
            "My name is Code Sydney and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day at Oswald Tech. I graduated from the California Institute of Technology in 2016 with a Bachelor's Degree in Software Development. While in school, I earned the 2015 Edmund Gains Award for my exemplary academic performance and leadership skills.";
    }
    const longName = firstName.length + lastName.length + 1 < 13;
    const displayName = () =>
        longName ? (
            <h3 className={classes.userName}>
                {firstName} {lastName}
            </h3>
        ) : (
            <h3 className={classes.userName}>
                {firstName} <br /> {lastName}
            </h3>
        );

    return (
        <>
            <Container maxWidth={false}>
                {/* main logo and text */}
                <Grid container className={classes.root} align="left">
                    <Grid item xs={12} sm={12} md={12} lg={3}>
                        <img src={picture} className={classes.profilePic} alt="Profile" />
                        <div>{displayName()}</div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={9} className={classes.userInfo}>
                        <Grid item>
                            <h1 className={classes.userName2}>{firstName + " " + lastName}</h1>
                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={12}>
                            <p className={classes.userInfo}>{profile.userSummary}</p>
                        </Grid>
                        <Grid item>
                            {skills.map((skill) => (
                                <Paper className={classes.paper} elevation={3}>
                                    {skill}
                                </Paper>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default UserProfile;
