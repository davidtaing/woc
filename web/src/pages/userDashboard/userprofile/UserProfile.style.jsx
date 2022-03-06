import { makeStyles } from "@material-ui/core/styles";
// import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginBottom: "35px",
    },
    second: {
        backgroundColor: "#efe8eb",
    },
    paper: {
        color: theme.palette.text.primary,
        textAlign: "center",
        width: "fit-content",
        maxWidth: "17rem",
        padding: "5px",
        display: "inline-block",
        marginRight: "10px",
        variant: "outlined",
        marginBottom: "12px",
        backgroundColor: "#fafafa",
        textOverflow: "ellipsis",
        overflow: "hidden",
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "12px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "15px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "17px",
        },
    },
    profilePic: {
        display: "inline - block",
        width: "320px",
        height: "320px",
        borderRadius: "5%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        maxWidth: "false",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "180px",
            height: "180px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "250px",
            height: "250px",
        },
    },
    userName: {
        fontWeight: "bold",
        fontSize: "2em",
    },
    userName2: {
        [theme.breakpoints.between("xs", "sm")]: {
            display: "none",
        },
    },

    userInfo: {
        fontSize: "20px",
        color: "grey",
        textAlign: "start",
        flexBasis: "100%",
        marginBottom: "10px",
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "15px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "20px",
            maxWidth: "90%",
        },
        [theme.breakpoints.between("md", "lg")]: {
            maxWidth: "100%",
        },
    },
    userInfoLabel: {
        marginRight: "15px",
        lineHeight: "2.43",
        float: "left",
        textAlign: "left",
        minWidth: "100px",
    },
    textField: {
        fontSize: "25px",
    },
}));

export default styles;
