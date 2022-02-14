import React from "react";
import { useAuth } from "contexts/authContext";
import {  Button, makeStyles, Dialog, Avatar } from "@material-ui/core";

const useStyles = makeStyles ({
    dialog: {
        position: 'absolute',
        right: 40,
        top: 45,
        alignItems: "center"
    },
    container:{
        width: '300px',
        height: '300px',
        position: 'relative'
    },
    dialogDetails: {
        color: "black",
        fontSize: "18px",
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "600",
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "30px 20px 30px 20px",
        textAlign: 'center'
    },
    dialogButtonContainer: {
        textAlign: 'center'
    },
    dialogButton: {
        color: "black",
        fontSize: "15px",
        fontFamily: `Montserrat, 'sans-serif'`,
        fontWeight: "600",
        border: "1px solid black",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginRight: "20px",
        marginLeft: "20px",
        marginBottom: "30px",
    },
    dialogAvatarContainer: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '8px'
    },
    avatar: {
        border: "1px solid black",
        height:"80px",
        width: "80px",
        cursor: "pointer"
    }
});

const AccountDetails  = (props) => {
    
    const classes = useStyles();
    const onCloseDialog = () => {
        props.onOpen(false);
    };
    
    const { logOut } = useAuth();
    const signOutHandler =  () => {
        props.onOpen(false);
        logOut();
    };

    return (
        <Dialog
            
            open={props.form}
            aria-labelledby="form-dialog-title"
            onClose={onCloseDialog}
            classes={{
                paper: classes.dialog
              }}
        >
            <div className={classes.container}>
                <div className={classes.dialogAvatarContainer}>
                    <Avatar src= "/logo192.png" className={classes.avatar}/>
                </div>
                <div className={classes.dialogDetails}>User Name</div>
                <div className={classes.dialogDetails}>Email</div>
                <div className={classes.dialogButtonContainer}>
                    <Button className={classes.dialogButton} onClick={signOutHandler} >
                        Sign Out
                    </Button>
                   
                </div>
            </div>
        </Dialog>
    );

};   
export default AccountDetails;