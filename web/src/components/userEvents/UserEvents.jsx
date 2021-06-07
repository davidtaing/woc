import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "../../components/userEvents/Event";
import './Event.css';
import img1 from "../../res/img/woc.jpg"

const UserEvents = () => {

const slideImages = [
    img1,
    img1,
    img1,
    img1
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    <Carousel responsive={responsive}>
            {
                slideImages.map((url,index) => {
                    return(
                        <div key={index}>
                            <div class="each-slide">
                                <img className="gallery-thumbnail" src={url} alt={'Image number' + (index + 1)} />
                                <span>Placeholder Field image number {index + 1}</span>
                            </div>
                        </div>                        
                    )
                })
            }    
    </Carousel>
)

};

export default UserEvents;