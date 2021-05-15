import React, { useState } from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import axios from "axios";

import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../../components/copyright/Copyright";
import { makeStyles } from "@material-ui/core/styles";

/* 
    Login page component

    TODO:
    - remember me checkbox not handled
    - bad login not handled
*/

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = { email, password };
        axios
            .post("/api/auth/login", credentials)
            .then((res) => {
                // ok set token
                axios.defaults.headers.common["Authorizaton"] = res.data.token;
                localStorage.setItem("tk", res.data.token.split(" ")[1]);
                setLoggedIn(true);

                // handle bad credentials
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    /// set redirecting path
    const referer = (props) => (props.location.state === undefined ? "/" : props.location.state.referer);

    if (loggedIn) return <Redirect to={referer(props)} />;

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!validateForm()}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/signUp" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default SignIn;
