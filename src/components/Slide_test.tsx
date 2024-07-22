import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3 className="text-black">1</h3>
            </div>
            <div>
                <h3 className="text-black">2</h3>
            </div>
            <div>
                <h3 className="text-black">3</h3>
            </div>
            <div>
                <h3 className="text-black">4</h3>
            </div>
            <div>
                <h3 className="text-black">5</h3>
            </div>
            <div>
                <h3 className="text-black">6</h3>
            </div>
        </Slider>
    );
}
