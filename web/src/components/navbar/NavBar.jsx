import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
import logo from "../../res/img/2.png";
import "./NavBar.css";

/* 
    Handing main navigation bar for site

    - NavItems might be change due to authentication status
    - Move regular css to MUI css
*/

const styles = makeStyles((theme) => ({
    flex: {
        flexGrow: 1,
    },
    navItem: {
        color: "white",
        fontSize: "1.5em",
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "300",
        //  textDecoration: 'none'
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
    },
    brandName: {
        fontFamily: `'Roboto Slab', serif`,
        margin: "0.5em",
        fontWeight: "300",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
    },
    navLoginLink: {
        textDecoration: "none",
    },
    brandNameLink: {
        textDecoration: "none",
    },
    offset: theme.mixins.toolbar,
    offsetPad: { paddingBottom: theme.spacing(1) },
}));

const NavBar = () => {
    const classes = styles();

    return (
        <>
            <AppBar className={classes.flex}>
                <Toolbar>
                    <Link to="/">
                        <div className={classes.flex}>
                            <img className="logo-image" src={logo} alt="landing page art"></img>
                        </div>
                    </Link>
                    <Link to="/" className={classes.brandNameLink}>
                        <h2 className={classes.brandName}>Women of Colour Australia</h2>
                    </Link>
                    <Typography variant="h6" className={classes.flex}></Typography>
                    <Link className={classes.navLoginLink} to="/login">
                        <Button className={classes.navItem}>Sign in</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={`${classes.offset}`} />
            <div className={`${classes.offsetPad}`} />
        </>
    );
};

export default NavBar;
