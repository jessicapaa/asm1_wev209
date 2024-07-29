import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    const settings = {
        // infinite: true,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                <div className="banner flex items-center h-[670px] relative ">
                    <div className="container">
                        <img
                            className=" absolute bottom-0 right-0 "
                            src="/assets/img/banner_2.png"
                            alt=""
                        />

                        <div className="banner_left h-full absolute flex flex-col justify-center ">
                            <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                                Wir kümmern uns um Ihre schöner Garten und Haus
                            </h1>
                            <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </p>
                            <div className="max-w-[216px] mt-7 ">
                                <a
                                    className="hover:text-white banner_act px-3 py-2 "
                                    href="/"
                                >
                                    Lern mehr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner1 flex items-center h-[670px] relative ">
                    <div className="container">
                        <img
                            className=" absolute bottom-0 right-0 "
                            src="/assets/img/banner_2.png"
                            alt=""
                        />

                        <div className="banner_left h-full absolute flex flex-col justify-center ">
                            <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                                Wir kümmern uns um Ihre schöner Garten und Haus
                            </h1>
                            <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </p>
                            <div className="max-w-[216px] mt-7 ">
                                <a
                                    className="hover:text-white banner_act px-3 py-2 "
                                    href="/"
                                >
                                    Lern mehr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner2 flex items-center h-[670px] relative ">
                    <div className="container">
                        <img
                            className=" absolute bottom-0 right-0 "
                            src="/assets/img/banner_2.png"
                            alt=""
                        />

                        <div className="banner_left h-full absolute flex flex-col justify-center ">
                            <h1 className="text-[#505F4E] w-[681px] font-bold text-[55px] leading-[70px]">
                                Wir kümmern uns um Ihre schöner Garten und Haus
                            </h1>
                            <p className="mt-[22px] w-[520px] text-[#665345] text-[15px] leading-[20px] tracking-[1.5px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s,
                            </p>
                            <div className="max-w-[216px] mt-7 ">
                                <a
                                    className="hover:text-white banner_act px-3 py-2 "
                                    href="/"
                                >
                                    Lern mehr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default Slide;
