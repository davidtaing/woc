import React, { useState, useEffect } from "react";

import "react-multi-carousel/lib/styles.css";

import { Grid, Paper, Container } from "@material-ui/core";
// import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./../../landing/Landing.style";

import CircularProgress from "@material-ui/core/CircularProgress";

function redirect(url) {
    window.open(url, "_blank");
}

const EventCard = (item, index) => {
    const classes = styles();

    console.log(item);
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <header>
                    <strong style={{ fontFamily: `'Roboto Slab', serif`, fontSize: "20px" }}>
                        {item.event.name.text}
                    </strong>
                </header>
                <p>{item.event.description.text}</p>
                <h5>{item.event.start.local}</h5>
                <Link onClick={() => redirect(item.event.url)} className="btn btn-primary">
                    Register here
                </Link>
            </Paper>
        </Grid>
    );
};

function UserEvents() {
    console.log(1);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            console.log("inside");
            fetch("api/events")
                .then((response) => response.json())
                .then((json) => console.log(json));
            setResponse(response);

            setLoading(false);
        }
        getData();
    }, [response]);

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
