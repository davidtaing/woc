import React, { useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import styles from "./UserProfile.style";
import picture from "./profilepic.jpg";

const UserProfile = ({ profile }) => {
    const classes = styles();
    setFakeProfileData();

    const [firstName, setFirstName] = useState(profile.firstName || "");
    const [lastName, setLastName] = useState(profile.lastName || "");
    const [skills, setSkills] = useState(profile.skills || "");

    //TODO:: get this data from database
    function setFakeProfileData() {
        profile.skills = ["Project Management", "Web", "React", "User Experience", "Software Engineering"];
        profile.phone = "04345214562";
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
            <Container maxWidth={false} className="root">
                {/* main logo and text */}
                <Grid container className={classes.root} align="center">
                    <Grid item sm={12} md={4} lg={4}>
                        <img src={picture} className={classes.profilePic} alt="Profile" />
                        <div>{displayName()}</div>
                    </Grid>

                    <Grid item sm={12} md={4} lg={4} className={classes.userInfo}>
                        <Grid item>
                            <h1>{firstName + " " + lastName}</h1>
                        </Grid>

                        <Grid item sm={12}>
                            <p>
                                My name is Code Sydney and I am a Junior Web Developer for Oswald Technologies. I am an
                                accomplished coder and programmer, and I enjoy using my skills to contribute to the
                                exciting technological advances that happen every day at Oswald Tech. I graduated from
                                the California Institute of Technology in 2016 with a Bachelor's Degree in Software
                                Development. While in school, I earned the 2015 Edmund Gains Award for my exemplary
                                academic performance and leadership skills.
                            </p>
                        </Grid>
                        <Grid item>
                            {skills.map((skill) => (
                                <Paper className={classes.paper}>{skill}</Paper>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default UserProfile;
