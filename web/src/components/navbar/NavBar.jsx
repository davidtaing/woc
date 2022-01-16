import React from "react";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/authContext";

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
        color: "black",
        fontSize: "27px",
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "600",
        border: "1px solid black",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginRight: "20px",
        //  textDecoration: 'none'
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    brandName: {
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "700",
        fontSize: "60px",
        color: "black",
        margin: "10px 10px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "20px",
        },
    },
    navLoginLink: {
        textDecoration: "none",
    },
    brandNameLink: {
        textDecoration: "none",
    },
    navbarDiv: {
        backgroundColor: "#fafafa",
        margin: "0.5rem 0px",
        borderBottom: "1px solid #F0F0F0",
        minHeight: "77px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 0,
        position: "relative",
    },
    offset: theme.mixins.toolbar,
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
            <AppBar className={classes.navbarDiv} elevation={0}>
                <Toolbar>
                    {/* LEFT: name */}
                    <Link to="/" className={classes.brandNameLink}>
                        <h2 className={classes.brandName}>WoCMentorWoc</h2>
                    </Link>
                    {/* spacing */}
                    <Box className={classes.flex} />
                    {/* RIGHT links */}
                    {renderButtons()}
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
};

export default NavBar;
