import React, { useState, useEffect } from "react";

import "react-multi-carousel/lib/styles.css";

import {
    Grid,
    Paper,
    Container,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
} from "@material-ui/core";
// import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import styles from "./../../landing/Landing.style";

import CircularProgress from "@material-ui/core/CircularProgress";

function redirect(url) {
    window.open("https://events.humanitix.com/" + url, "_blank");
}

const EventCard = (event, index) => {
    const classes = styles();

    console.log(event);
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <header>
                    <strong style={{ fontFamily: `'Roboto Slab', serif`, fontSize: "20px" }}>{event.event.name}</strong>
                </header>
                <h5> {event.event.description} </h5>
                <Link onClick={() => redirect(event.event.slug)} className="btn btn-primary">
                    Register here
                </Link>
            </Paper>
        </Grid>
    );
};

//API call to backend

function UserEvents() {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("-------------");
        const fetchEvents = async () => {
            const apiResult = await fetch(`/api/events`, {
                method: "GET",
            });
            const body = await apiResult.json();
            const res = JSON.parse(body);
            setLoading(false);
            setResponse(res.events);
            console.log(res.events);
        };

        fetchEvents();
    }, []);

    return (
        <>
            <h2>Events</h2>
            <Container>
                <Grid container className="classes.second">
                    <Grid container spacing={4} style={{ paddingTop: "4em" }}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            response.map((item) => {
                                console.log(item + "he");
                                return <Grid item={true}>{<EventCard key={item.id} event={item} />}</Grid>;
                            })
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default UserEvents;
