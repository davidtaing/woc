import { makeStyles } from "@material-ui/core/styles";
import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        //flexDirection: "column",
        justifyContent: "left",
        marginBottom: "35px",
    },
    second: {
        backgroundColor: "#efe8eb",
    },
    paper: {
        // padding: theme.spacing(1),
        textAlign: "center",

        color: theme.palette.text.secondary,
    },
    modalBox: {
        //  width: "40%",
    },
    backgroundStyle: {
        paddingTop: "26px",
        marginRight: "16px",
        border: "2px solid lightgrey",
        padding: "10px",
        borderRadius: "25px",
        backgroundColor: " #f2f2f2",
    },
    profilePic: {
        display: "inline - block",
        width: "180px",
        height: "180px",
        borderRadius: "50%",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    userName: {
        fontWeight: "bold",
        fontSize: "2em",
        fontFamily: `'Roboto Slab', serif`,
    },
    userOccupation: {
        fontSize: "16px",
        fontFamily: `'Roboto Slab', serif`,
        marginBottom: "0px",
        color: "grey",
    },
    profileInnerDiv: {},
    userInfo: {
        textAlign: "left",
        fontFamily: `'Roboto Slab', serif`,
        fontSize: "9px",
        paddingTop: "40px !important",
        marginRight: "16px",
        border: "2px solid lightgrey",
        padding: "10px",
        borderRadius: "25px",
        backgroundColor: "#f2f2f2",
        paddingLeft: "37px",
        color: "grey",
    },
    imageDiv: {
        [theme.breakpoints.between("xs", "sm")]: {
            width: "90% !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            textAlign: "center",
        },
        [theme.breakpoints.between("md", "lg")]: {
            textAlign: "center",
        },
    },
    landingPic: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "90% !important",
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "65% !important",
        },
        [theme.breakpoints.between("md", "lg")]: {
            width: "100% !important",
        },
    },
    description: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "300",
        letterSpacing: "0.02em",
        fontSize: "1.65em",
        [theme.breakpoints.between("xs", "sm")]: {
            paddingLeft: "inherit !important",
            paddingRight: "inherit !important",
        },
    },
    caption: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "bold",
        lineHeight: "1",
        marginBottom: "0",
        fontSize: "60px",
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
