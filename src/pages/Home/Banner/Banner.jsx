import axios from "axios";
import Slide from "./Slide";
import { useEffect, useState } from "react";


const Banner = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/slides-data')
            .then(response => {
                setSlides(response.data);
            })
    }, [])

    return (
        <div className="carousel w-full h-[600px]">
            {
                slides.map((slide, idx) => <Slide
                    key={slide._id}
                    slide={slide}
                    nextSliderId={idx !== slides.length - 1 ? slides[idx + 1]._id : slides[0]._id}
                    previousSliderId={idx !== 0 ? slides[idx - 1]._id : slides[slides.length - 1]._id}
                ></Slide>)
            }
        </div>
    );
};

export default Banner;