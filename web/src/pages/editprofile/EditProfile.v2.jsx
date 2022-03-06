import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "@material-ui/core";
import styles from "../userDashboard/userprofile/UserProfile.style";
import picture from "../userDashboard/userprofile/profilepic.jpg";
// import UploadPhoto from "./UploadPhoto";
import EditProfile from "./EditProfile";
import TextField from "@mui/material/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

const EditProfile2 = () => {
    const classes = styles();
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName || "");
    const [lastName, setLastName] = useState(profile.lastName || "");
    // const [skills, setSkills] = useState(profile.skills || "");

    console.log(profile.firstName);

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
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Container>
                        {/* main logo and text */}
                        <Grid container className={classes.root} align="center" sm={12}>
                            <Grid item>
                                <img src={picture} className={classes.profilePic} alt="Profile" />
                                <div>{/* <UploadPhoto /> */}</div>
                            </Grid>

                            <Grid item sm={12} md={4} lg={4} className={classes.userInfo}>
                                <Grid item style={{ marginBottom: "10px" }}>
                                    <label className={classes.userInfoLabel} htmlFor="username">
                                        Name
                                    </label>
                                    <TextField
                                        className={classes.textField}
                                        id="username"
                                        type="text"
                                        value={profile.firstName + " " + profile.lastName}
                                    />
                                </Grid>

                                <Grid item style={{ marginBottom: "10px" }}>
                                    <label className={classes.userInfoLabel} htmlFor="useremail">
                                        Email
                                    </label>
                                    <TextField
                                        className={classes.textField}
                                        id="useremail"
                                        type="email"
                                        value={profile.email}
                                    />
                                </Grid>

                                <Grid item style={{ marginBottom: "10px" }}>
                                    <label className={classes.userInfoLabel} htmlFor="userlinkedinUrl">
                                        Linkedin
                                    </label>
                                    <TextField
                                        className={classes.textField}
                                        id="userlinkedinUrl"
                                        type="text"
                                        value={profile.linkedinUrl}
                                    />
                                </Grid>
                                {/* <Grid item style={{ marginBottom: "10px" }}>
                                    <label className={classes.userInfoLabel} htmlFor="userskills">
                                        Skills
                                    </label>
                                    <TextField
                                        className={classes.textField}
                                        
                                        id="userskills"
                                        type="text"
                                        value={profile.skills}
                                    />
                                </Grid> */}
                                <Grid item style={{ marginBottom: "10px" }}>
                                    <label className={classes.userInfoLabel} htmlFor="usermentor">
                                        Mentor
                                    </label>
                                    <TextField
                                        className={classes.textField}
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
                            // skills={skills}
                            // onSkillsChange={setSkills}
                        />
                    </Container>
                </>
            )}
        </div>
    );
};

export default EditProfile2;
