import { makeStyles } from "@material-ui/core/styles";
// import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginBottom: "35px",
        gridGap: "20px",
        maxWidth: "false",
    },
    second: {
        backgroundColor: "#efe8eb",
    },
    paper: {
        elevation: 6,
        color: theme.palette.text.primary,
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
    },
    modalBox: {
        //  width: "40%",
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
    },
    userName: {
        fontWeight: "bold",
        fontSize: "2em",
        fontFamily: `Montserrat, 'sans-serif'`,
    },
    userInfo: {
        fontFamily: `Montserrat, 'sans-serif'`,
        fontSize: "20px",
        color: "grey",
        textAlign: "start",
        flexBasis: "100%",
        marginBottom: "10px",
        maxWidth: "60%",
        [theme.breakpoints.between("xs", "sm")]: {
            maxWidth: "false",
        },
        [theme.breakpoints.between("sm", "md")]: {
            maxWidth: "false",
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
        fontFamily: `Montserrat, 'sans-serif'`,
        fontSize: "25px",
    },
}));

export default styles;
