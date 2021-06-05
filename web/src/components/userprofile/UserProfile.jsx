import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";

const UserProfile = ({ profile }) => {
    return (
        <>
            <Container>
                {/* main logo and text */}
                <Grid container spacing={3}>
                    <Grid item>
                        {profile.firstName} {profile.lastName}
                    </Grid>
                    <Grid item>
                        <img src={profile.picture} alt="Profile" />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item>
                        <h1>Occupation: {profile.occupation}</h1>
                    </Grid>
                    <Grid item>
                        <h1>Nationality: {profile.nationality}</h1>
                    </Grid>
                    <Grid item>
                        <h1>Language: {profile.language}</h1>
                    </Grid>
                    <Grid item>
                        <h1>Skills: {profile.skills}</h1>
                    </Grid>
                    <Grid item>
                        <h1>Interests: {profile.interests}</h1>
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
