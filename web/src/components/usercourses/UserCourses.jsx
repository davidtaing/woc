import React from "react";
import Course from "../course/Course";
import { Grid } from "@material-ui/core";

// TODO
// 1. when to call the API for all the course the user joined
// 2. Date type in mongoDB
const course = [
    {
        id: "001",
        title: "membership portal 101",
        date: "16/07/2021",
        description: "new to the membership portal, no problems. let's dive into how to start with it",
    },
    {
        id: "002",
        title: "membership portal 201",
        date: "23/09/2021",
        description: "expert to the membership portal, no dramas. let's dive into how to start with it",
    },
    {
        id: "003",
        title: "membership portal 301",
        date: "23/09/2021",
        description: "master to the membership portal, no worries. let's dive into how to start with it",
    },
];

function UserCourses() {
    const courses = course.map((course) => {
        return (
            <Grid item={true}>
                <Course key={course.id} course={course} />
            </Grid>
        );
    });
    return (
        <>
            <h2> Courses</h2>
            <Grid container spacing={3} wrap={"nowrap"}>
                {courses}
            </Grid>
        </>
    );
}

export default UserCourses;
