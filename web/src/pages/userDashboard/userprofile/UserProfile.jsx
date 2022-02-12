import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import styles from "./UserProfile.style";
import picture from "./profilepic.jpg";
import TextField from "@mui/material/TextField";

const UserProfile = ({ profile }) => {
    const classes = styles();
    setFakeProfileData();

    const [firstName, setFirstName] = useState(profile.firstName || "");
    const [lastName, setLastName] = useState(profile.lastName || "");
    const [skills, setSkills] = useState(profile.skills);

    //TODO:: get this data from database
    function setFakeProfileData() {
        profile.skills = "Web";
        profile.phone = "04345214562";
        profile.linkedinUrl = "";
        profile.mentor = "Roberta Lee";
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
            <Container>
                {/* main logo and text */}
                <Grid container className={classes.root} align="center" sm={12}>
                    <Grid item>
                        <img src={picture} className={classes.profilePic} alt="Profile" />
                        <div>
                            {/* <UploadPhoto /> */}
                            {displayName()}
                        </div>
                    </Grid>

                    <Grid item sm={12} md={4} lg={4} className={classes.userInfo}>
                        <Grid item style={{ marginBottom: "10px" }}>
                            <h1>{firstName + " " + lastName}</h1>
                        </Grid>

                        <Grid item sm={12} md={12} lg={12} style={{ marginBottom: "10px" }}>
                            <p>
                                My name is Code Sydney and I am a Junior Web Developer for Oswald Technologies. I am an
                                accomplished coder and programmer, and I enjoy using my skills to contribute to the
                                exciting technological advances that happen every day at Oswald Tech. I graduated from
                                the California Institute of Technology in 2016 with a Bachelor's Degree in Software
                                Development. While in school, I earned the 2015 Edmund Gains Award for my exemplary
                                academic performance and leadership skills.
                            </p>
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }}></Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default UserProfile;
