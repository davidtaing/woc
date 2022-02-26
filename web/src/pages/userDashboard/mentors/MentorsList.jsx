import React from "react";
import MentorCard from "./MentorCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid } from "@material-ui/core";
import mentorImg1 from "res/img/mentor1.jpg";
import mentorImg2 from "res/img/mentor2.jpg";
import mentorImg3 from "res/img/mentor3.jpg";
import mentorImg4 from "res/img/mentor4.jpg";
import mentorImg5 from "res/img/mentor5.jpg";
import { ClassNames } from "@emotion/react";

const mentor = [
    { id: 1, name: "Alexandra Robinson", photo: mentorImg1 },
    { id: 2, name: "Roberta Lee", photo: mentorImg2 },
    { id: 3, name: "Clara Boyd", photo: mentorImg3 },
    { id: 4, name: "Christina Martin", photo: mentorImg4 },
    { id: 5, name: "Sofia Ronald", photo: mentorImg5 },
    { id: 6, name: "Anna Frank", photo: mentorImg1 },
    { id: 7, name: "Melissa Loyd", photo: mentorImg2 },
    { id: 8, name: "Layla N. Martinovic", photo: mentorImg3 },
    { id: 9, name: "Ruth Nolan", photo: mentorImg4 },
];

const responsiveCarousel = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function MentorsList() {
    return (
        <>
            <h1>Mentors</h1>
            <Grid style={{ paddingTop: "4em", paddingBottom: "4em" }}>
                <Carousel responsive={responsiveCarousel}>
                    {mentor.map((item) => {
                        return (
                            <Grid item={true}>
                                <MentorCard key={item.id} mentor={item} />
                            </Grid>
                        );
                    })}
                </Carousel>
            </Grid>
        </>
    );
}

export default MentorsList;
