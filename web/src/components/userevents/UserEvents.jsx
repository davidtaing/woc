import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../res/img/woc.jpg";
import { Grid } from "@material-ui/core";
import Event from "../event/Event";

    /* We upload all the images with titles and date from the user details*/
const slideImages = [
    {
      id: "001",
      url: img1, 
      title: "Title 1", 
      date: "05-05-20201"
    },
    {
      id: "002",
      url: img1, 
      title: "Title 2", 
      date: "05-04-20201"
    },
    {
      id: "003",
      url: img1, 
      title: "Title 3", 
      date: "05-03-20201"
    },
    {
      id: "004",
      url: img1, 
      title: "Title 4", 
      date: "05-02-20201"
    }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function UserEvents () {

return (
    <div className="slide-container">
        <h2>Events</h2>
    <Carousel responsive={responsive}>
            {
                slideImages.map((event) => {
                    return (
                      <Grid item={true}>
                          <Event key={event.id} event={event} />
                      </Grid>
                  );
                })
            }    
    </Carousel>
    </div>
)
};

export default UserEvents;