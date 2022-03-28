import React, { useState, useEffect } from "react";
import random from "res/img/events5.svg";
import axios from "axios";

import {
    Grid,
    Container,
    Card,
    Button,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    CardActions,
    CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,
    },
});

function redirect(url) {
    window.open("https://events.humanitix.com/" + url, "_blank");
}

const EventCard = (event, index) => {
    const classes = useStyles();
    let img = event.event.bannerImage ? event.event.bannerImage.url : random;
    let date = new Date(event.event.startDate);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component="img" alt="event banner" height="140" image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {event.event.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {date.toDateString()}
                        <br></br>

                        {event.event.ticketTypes[0].price === 0 ? "Free" : event.event.ticketTypes[0].price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => redirect(event.event.slug)} size="small" color="primary">
                    Register here
                </Button>
            </CardActions>
        </Card>
    );
};
function UserEvents() {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        axios
            .get("/api/events")
            .then((res) => {
                let eventList = JSON.parse(res.data).events;

                if (isMounted) {
                    setLoading(false);
                    setResponse(eventList);
                }
            })
            .catch((err) => console.log(err));
        return () => {
            isMounted = false;
            setLoading(true);
        };
    }, []);

    return (
        <>
            <h1>Upcoming events</h1>
            <Container maxWidth={false}>
                <Grid container>
                    <Grid container style={{ paddingTop: "4em", paddingBottom: "4em" }}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            response.map(function (item) {
                                return <Grid item={true} key={item._id}>{<EventCard key={item._id} event={item} />}</Grid>;
                            })
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default UserEvents;
