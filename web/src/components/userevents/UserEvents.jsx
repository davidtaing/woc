import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Event.css';
import img1 from "../../res/img/woc.jpg"

const UserEvents = () => {

    /* We upload all the images with titles and date from the user details*/
const slideImages = [
    [img1, "Title 1", "05-05-20201"],
    [img1, "Title 2", "05-04-20201"],
    [img1, "Title 3", "05-03-20201"],
    [img1, "Title 4", "05-02-20201"]
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

return (
    <div className="slide-container">
        <h2>Events</h2>
    <Carousel responsive={responsive}>
            {
                slideImages.map((url,index) => {
                    return(
                        <div key={index}>
                            <div class="each-slide">
                                <img className="each-image" src={url[0]} alt={'Image number' + (index + 1)} />
                                <br/>
                                <span>{url[1]}</span>
                                <br/>
                                <span>Date {url[2]}</span>
                            </div>
                        </div>                        
                    )
                })
            }    
    </Carousel>
    </div>
)
};

export default UserEvents;