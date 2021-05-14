import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Button } from "@material-ui/core/";
import landingSvg from "../../res/img/women.svg";
import styles from "./Landing.style";

/* 
    Landing page component
*/

function Landing() {
    const classes = styles();

    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6} align="center" className={classes.root}>
                        <h1 className={classes.caption}>Fairer and more equitable Australia for all Women of Colour</h1>
                        <h5 className={classes.description}>We exist to champion Australia’s Women of Colour.</h5>
                        <Link to="/signup">
                            <Button variant="contained" /* color="secondary" */ className={classes.btnJoin}>
                                Join us
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img className={classes.landingPic} src={landingSvg} alt="women of colour" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Landing;
