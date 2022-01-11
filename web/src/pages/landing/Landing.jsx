import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Paper, Button } from "@material-ui/core";
import landingSvg from "res/img/women.svg";
import styles from "./Landing.style";

/* 
    Landing page component
*/

// card for item box
const Card = ({ item, index }) => {
    const classes = styles();

    return (
        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Paper className={classes.paper}>
                <img src={item.icon} alt="Icon" style={{ height: "125px", padding: "10px" }} />
                <header>
                    <strong style={{ fontFamily: `'Roboto Slab', serif`, fontSize: "20px" }}>{item.title}</strong>
                </header>
            </Paper>
        </Grid>
    );
};

function Landing() {
    const classes = styles();

    return (
        <>
            <Container>
                {/* main logo and text */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} align="center" className={classes.root}>
                        <h1 className={classes.caption}>Women of Colour Australia</h1>
                        <h5 className={classes.description}>
                            A mentorship program designed by, with and for Women of Colour
                        </h5>
                        <Link to="/signup" className={classes.btnJoinLink}>
                            <Button variant="contained" className={classes.btnJoin}>
                                register now
                            </Button>
                        </Link>
                    </Grid>
                    <Grid className={classes.imageDiv} item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.landingPic} src={landingSvg} alt="women of colour" />
                    </Grid>
                </Grid>
                {/* item boxes */}
            </Container>
        </>
    );
}

export default Landing;
