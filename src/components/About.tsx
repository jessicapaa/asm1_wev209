import React from "react";

type Props = {};

const About = (props: Props) => {
    return (
        <>
            <div className="container">
                <div className="about_list">
                    <div className="about_item bg-white relative w-[452px]">
                        <img
                            className="object-cover block"
                            src="/assets/img/about_1.png"
                            alt=""
                        />
                        <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                            Lorem, ipsum dolor.
                        </h3>
                    </div>
                    <div className="about_item bg-white w-[278px] relative">
                        <img
                            className="object-cover block"
                            src="/assets/img/about_2.png"
                            alt=""
                        />

                        <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                            Lorem, ipsum dolor.
                        </h3>
                    </div>
                    <div className="about_item bg-white w-[278px] relative">
                        <img
                            className="object-cover block"
                            src="/assets/img/about_3.png"
                            alt=""
                        />

                        <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                            Lorem, ipsum dolor.
                        </h3>
                    </div>
                    <div className="about_item bg-white w-[278px] relative">
                        <img
                            className="object-cover block"
                            src="/assets/img/about_4.png"
                            alt=""
                        />

                        <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                            Lorem, ipsum dolor.
                        </h3>
                    </div>
                    <div className="about_item bg-white w-[278px] relative">
                        <img
                            className="object-cover block"
                            src="/assets/img/about_5.png"
                            alt=""
                        />

                        <h3 className="absolute top-[20px] left-0 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4 my-4">
                            Lorem, ipsum dolor.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
