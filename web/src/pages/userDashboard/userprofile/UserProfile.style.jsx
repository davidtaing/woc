import { makeStyles } from "@material-ui/core/styles";
// import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "35px",
        gridGap: "100px",
        paddingTop: "4em",
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
        border: "2px solid lightgrey",
        padding: "10px",
        borderRadius: "25px",
        backgroundColor: " #f2f2f2",
    },
    profilePic: {
        display: "inline - block",
        width: "320px",
        height: "320px",
        borderRadius: "5%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
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
