import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Paper, Button } from "@material-ui/core";
import landingSvg from "./../../res/img/WoCA logo.png";
import styles from "./Landing.style";

/* 
    Landing page component
*/

function Landing() {
    const classes = styles();

    return (
        <>
            <Container style={{ maxWidth: "1654px" }}>
                {/* main logo and text */}
                <Grid container rowSpacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6} align="start" className={classes.root}>
                        <h1 className={classes.caption}>Women of Colour Australia</h1>
                        <h5 className={classes.description}>
                            A mentorship program designed by, with and for Women of Colour
                        </h5>
                        <Link to="/signup" className={classes.btnJoinLink}>
                            <Button variant="contained" className={classes.btnJoin}>
                                register now
                            </Button>
                        </Link>
                        <p className={classes.description2}>
                            WocMentorWoc Program is owned and operated by Women of Colour Australia (WoCA), Australia's
                            leading not-for-profit organisation advocating for a fairer and more equitable Australia for
                            all women of colour.{" "}
                        </p>
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
