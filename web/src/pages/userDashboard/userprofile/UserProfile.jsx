import React, { useState } from "react";
// import EditIcon from "@material-ui/icons/Edit";
import { Container, Grid } from "@material-ui/core";
import styles from "./UserProfile.style";
import picture from "./profilepic.jpg";
// import UploadPhoto from "./UploadPhoto";
import EditProfile from "./EditProfile";
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
                        {/* <IconButton onClick={openDialog} style={{ marginLeft: "470px" }}>
                            <EditIcon />
                        </IconButton> */}
                        {/* dont really like inline styling */}
                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="username">
                                Name
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="username"
                                type="text"
                                value={firstName + " " + lastName}
                            />
                        </Grid>

                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="useremail">
                                Email
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="useremail"
                                type="email"
                                value={profile.email}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="userphone">
                                Phone
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="phone"
                                type="text"
                                value={profile.phone}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="userlinkedinUrl">
                                Linkedin
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="userlinkedinUrl"
                                type="text"
                                value={profile.linkedinUrl}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="userskills">
                                Skills
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="userskills"
                                type="text"
                                value={profile.skills}
                            />
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }}>
                            <label className={classes.userInfoLabel} htmlFor="usermentor">
                                Mentor
                            </label>
                            <TextField
                                className={classes.textField}
                                disabled
                                id="usermentor"
                                type="text"
                                value={profile.mentor}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <EditProfile // Note: passing object over maybe cleaner
                    name={firstName}
                    onNameChange={setFirstName}
                    lastName={lastName}
                    onLastNameChange={setLastName}
                    skills={skills}
                    onSkillsChange={setSkills}
                />
            </Container>
        </>
    );
};

export default UserProfile;
