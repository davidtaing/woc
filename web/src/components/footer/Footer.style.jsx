import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
    contactInformationDiv: {
        backgroundColor: "#895714",
        marginTop: 40,
        paddingTop: 40,
        paddingBottom: 40,
        display: "flex"
    },
    contactInformation:{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "70%"
    },
    informationTitle: {
        color: "white",
        fontSize: 26,
        fontWeight: 400,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        marginLeft: 80
    },
    information: {
        color: "white",
        fontSize: 17,
        fontWeight: 200,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        marginLeft: 120,
        lineHeight: 1.5
    },
    definitionContainer: {
        backgroundColor: "black",
        color: "grey",
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: 400,
        
    },
    definitionDiv: {
        display: "flex",
        marginLeft: 80,
        marginRight: 80
    },
    block: {
        lineHeight: 1.7,
        width: "25%",
        textAlign: "justify",
        margin: 30
    },
    title:{
        fontWeight: 400,
        fontSize:20,
        color: "white"
    },
    wocimage: {
        width: 150,
        height: 150,
        maxWidth: 150,
        maxHeight: 150,
        textAlign: "center",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    },
    socialMediaDiv: {
        width: "30%",
        float: "right",
        marginRight: 80     
    },
    socialMediaTitle: {
        textAlign: "right",
        color: "white",
        fontSize: 17,
        fontWeight: 300,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        width: "100%"
    },
    socialMediaIcons: {
        width: "100%",
        textAlign: "right"
    },
    socialMediaIcon: {
        color: "white",
        fontSize: 35
    },
    copyright:{
        fontSize: 15,
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: 300,
        color: "grey",
        backgroundColor: "black",
        opacity: 0.9,
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20
    },
    paragraph: {
        marginLeft: 80,
        marginRight: 80,
        allign: "left",
        textAlign: "justify"
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
        "&:hover": {
            color: "#afafaf"
        },
        fontWeight: 400
    },
    linkCopyright: {
        marginRight: 10,
        color: "#ffffff",
        textDecoration: "none",
        "&:hover": {
            color: "#afafaf"
        },
        fontWeight: 400,
    }
}));

export default styles;