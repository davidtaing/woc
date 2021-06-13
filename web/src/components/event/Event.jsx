import React from 'react';
import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: '85%',
    maxWidth: '85%',
    borderRadius: 4
  },
});

export default function Event( {event} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={event.url}
          title={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
