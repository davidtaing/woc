import React from "react";
import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1),
    },
    media: {
        height: 175,
    },
}));

export default function MentorCard({ mentor }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={mentor.photo} name={mentor.name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {mentor.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
