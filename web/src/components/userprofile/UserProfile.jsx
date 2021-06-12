import React from "react";
import { Container, FormControl, Grid } from "@material-ui/core";
import styles from "./UserProfile.style";
import picture from "./../../res/img/profilepic.jpg";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const UserProfile = ({ profile }) => {
    const classes = styles();

    return (
        <>
            <Container>
                {/* main logo and text */}
                <Grid container className={classes.root} align="center" spacing={3} sm={12}>
                    <Grid item className={classes.backgroundStyle}>
                        <img src={picture} className={classes.profilePic} alt="Profile" />
                        <div>
                            <h3 className={classes.userName}>
                                {profile.firstName} {profile.lastName}
                            </h3>
                            <h5 className={classes.userOccupation}>
                                {" "}
                                <LocationOnOutlinedIcon /> Sydney, Australia
                            </h5>
                        </div>
                        <br></br>
                    </Grid>

                    <Grid className={classes.userInfo} item sm={12} md={6} lg={6}>
                        <div className={classes.profileInnerDiv}>
                            <h1>
                                Occupation <span style={{ marginLeft: "49px", color: "	#A8A8A8" }}>UI Designer</span>
                            </h1>
                            <hr />
                            <h1>
                                Nationality <span style={{ marginLeft: "48px", color: "	#A8A8A8" }}>Australian</span>
                            </h1>
                            <hr />

                            <h1>
                                Language
                                <span style={{ marginLeft: "66px", color: "	#A8A8A8" }}>English | Spanish</span>
                            </h1>
                            <hr />
                            <h1>
                                Skills{" "}
                                <span style={{ marginLeft: "95px", color: "	#A8A8A8" }}>Design | Coding | UI | UX</span>
                            </h1>
                            <hr />
                            <h1>
                                Interests
                                <span style={{ marginLeft: "68px", color: "	#A8A8A8" }}>
                                    {" "}
                                    Painting | Reading | Web Design
                                </span>
                            </h1>
                            <hr />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            {/* <div>User Profile</div>
            <div>
                <p>First Name: {profile.firstName}</p>
                <p>Last Name: {profile.lastName}</p>
                <p>Email: {profile.email}</p>
            </div> */}
        </>
    );
};

export default UserProfile;
