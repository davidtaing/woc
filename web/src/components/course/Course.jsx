import { makeStyles, Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
}));

export default function Course({ course }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title={course.title} subheader={course.date} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {course.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
