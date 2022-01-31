import React from "react";
import { useAuth } from "contexts/authContext";
import {  Button, makeStyles, Dialog, DialogTitle, DialogActions  } from "@material-ui/core";

const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      right: 40,
      top: 45
    }
  });

const AccountDetails  = (props) => {
    
    const classes = useStyles();
    const onCloseDialog = () => {
        props.onOpen(false);
    };
    
    const logOut = useAuth();
    const signOutHandler =  () => {
        props.onOpen(false);
        logOut();

    };


    return ( 
        <Dialog
            maxWidth="lg"
            open={props.form}
            aria-labelledby="form-dialog-title"
            onClose={onCloseDialog}
            classes={{
                paper: classes.dialog
              }}
        >
            <DialogTitle id="form-dialog-title">User Name</DialogTitle>
            <DialogTitle id="form-dialog-title">code@sydney.com</DialogTitle>
            <DialogActions>
                <Button onClick={signOutHandler} color="primary">
                    Sign Out
                </Button>
                <Button onClick={onCloseDialog} color="primary">
                    Close
                </Button>
            </DialogActions>
            </Dialog>
    );

};   
export default AccountDetails;