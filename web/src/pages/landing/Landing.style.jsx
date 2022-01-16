import { makeStyles } from "@material-ui/core/styles";
// TODO: change this to font in Index
import "components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 0,
        paddingRight: 0,
    },
    btnJoinLink: {
        textDecoration: "none",
    },
    btnJoin: {
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "600",
        fontSize: "25px",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        //marginTop: "2rem",
        borderRadius: "1rem",
        width: "45%",
        height: "4rem",
        textAlign: "center",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        "&:active": {
            transform: "translateY(10px)",
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "13px",
        },
    },
    imageDiv: {
        [theme.breakpoints.between("xs", "sm")]: {
            display: "none",
        },
        [theme.breakpoints.between("sm", "md")]: {
            textAlign: "center",
        },
        [theme.breakpoints.between("md", "lg")]: {
            textAlign: "center",
        },
    },
    landingPic: {
        width: "86%",
        height: "auto",
        marginLeft: "172px",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "90% !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "65% !important",
        },
        [theme.breakpoints.between("md", "lg")]: {
            width: "86% !important",
        },
    },
    description: {
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "300",
        letterSpacing: "0.02em",
        fontSize: "25px",
        [theme.breakpoints.between("xs", "sm")]: {
            paddingLeft: "inherit !important",
            paddingRight: "inherit !important",
            fontSize: "18px",
        },
    },
    description2: {
        fontSize: "15px",
        paddingTop: "30px",
    },
    caption: {
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "700",
        lineHeight: "1",
        marginBottom: "0",
        fontSize: "69px",
        textAlign: "-webkit-match-parent",
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "32px !important",
            marginTop: "26px !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "40px !important",
            marginLeft: "16% !important",
            marginRight: "16% !important",
            paddingTop: "inherit !important",
        },
        [theme.breakpoints.between("md", "lg")]: {
            paddingTop: "inherit !important",
            marginLeft: "0 !important",
            marginRight: "0 !important",
        },
    },
}));

export default styles;
