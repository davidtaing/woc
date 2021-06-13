import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
import logo from "../../res/img/2.png";
import { useAuth } from "../../contexts/authContext";

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
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
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
    logoImage: {
        justifyContent: "left",
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        overflow: "hidden",
        cursor: "pointer",
        marginLeft: "20px",
    },
}));

const NavButtons = ({ data }) => {
    const classes = styles();
    return (
        <Link className={classes.navLoginLink} to={data.path}>
            <Button className={classes.navItem} onClick={data.click}>
                {data.text}
            </Button>
        </Link>
    );
};

const NavBar = () => {
    const classes = styles();
    const { loggedIn, logOut } = useAuth();

    const btLogIn = { text: "Sign In", path: "/login" };
    const btLogOut = { text: "Sign out", click: () => logOut() };
    const btAdmin = { text: "Admin", path: "/admin" };

    // render buttons
    const NotAuthenticated = () => <NavButtons data={btLogIn} />;

    const Authenticated = () => (
        <>
            <NavButtons data={btAdmin} />
            <NavButtons data={btLogOut} />
        </>
    );

    const renderButtons = () => (loggedIn ? <Authenticated /> : <NotAuthenticated />);

    return (
        <>
            <AppBar className={classes.flex}>
                <Toolbar>
                    {/* LEFT: logo/ name */}
                    <Link to="/">
                        <div className={classes.flex}>
                            <img className={classes.logoImage} src={logo} alt="landing page art"></img>
                        </div>
                    </Link>
                    <Link to="/" className={classes.brandNameLink}>
                        <h2 className={classes.brandName}>Women of Colour Australia</h2>
                    </Link>
                    {/* spacing */}
                    <Typography variant="h6" className={classes.flex}></Typography>
                    {/* RIGHT links */}
                    {renderButtons()}
                </Toolbar>
            </AppBar>
            <div className={`${classes.offset}`} />
            <div className={`${classes.offsetPad}`} />
        </>
    );
};

export default NavBar;
