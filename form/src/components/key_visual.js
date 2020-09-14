
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    infinite: true,
    arrows: false,
    autoplay: true,

    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: true,
};

export default class KeyVisual extends React.Component {

    render = () => {
        return (
            <div className="key-visual">
                <div className="key-visual-item">
                    <Slider {...settings}>
                        <img src="./images/h/brandimage_1.jpg" alt="" />
                        <img src="./images/h/brandimage_2.jpg" alt="" />
                    </Slider>
                </div>

                <div className="key-visual-item">
                    <Slider {...settings}>
                        <div>
                            <img src="./images/h/key_title.png" alt="" />
                        </div>
                    </Slider>
                </div>

                <div className="key-visual-item">
                    <Slider {...settings}>
                        <img src="./images/h/brandimage_3.jpg" alt="" />
                        <img src="./images/h/brandimage_4.jpg" alt="" />
                    </Slider>
                </div>
            </div>

        )
    }

}