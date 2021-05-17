import { makeStyles } from "@material-ui/core/styles";
import "../../components/navbar/NavBar.css";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    second: {
        backgroundColor: "#efe8eb"
    },
    paper: {
       // padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    btnJoinLink: {
        textDecoration: "none"
    },
    btnJoin: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "600",
        fontSize: "1em",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        //marginTop: "2rem",
        borderRadius: "4rem",
        width: "35%",
        height: "4rem",
        textAlign: "center",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        "&:active": {
            transform: "translateY(10px)",
        },
    },
    landingPic: {
        width: "100%",
        height: "auto",
    },
    description: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "300",
        letterSpacing: "0.02em",
        fontSize: "1.65em",
    },
    caption: {
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: "bold",
        lineHeight: "1",
        marginBottom: "0",
        fontSize: "60px",
        textAlign: "-webkit-match-parent",
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
            marginTop: '45px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
          },
          [theme.breakpoints.down('md')]: {
            paddingTop: 'inherit',
          },
    },
}));

export default styles;
