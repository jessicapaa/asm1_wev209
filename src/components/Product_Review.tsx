import React from "react";

const Product_Review = () => {
    return (
        <>
            <div className="container">
                <div className="flex items-center gap-[18px]">
                    <img
                        src="/assets/img/product_cart_1.png"
                        alt=""
                        className="w-[183px] h-[183px] object-cover"
                    />
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                            <img src="/assets/svg/star_review.svg" alt="" />
                            <img src="/assets/svg/star_review.svg" alt="" />
                            <img src="/assets/svg/star_review.svg" alt="" />
                            <img src="/assets/svg/star_review.svg" alt="" />
                            <img src="/assets/svg/star_review.svg" alt="" />
                        </div>
                        <span className="text-[#4E7C32] text-[32px]">
                            5.0
                            <span className="text-[#00000099] text-[18px]">
                                (388)
                            </span>
                        </span>
                    </div>
                </div>

                <div className="vote_star_group">
                    <div className="flex items-center gap-[5px] mt-[40px]">
                        <span>1</span>
                        <img src="/assets/svg/star_mini.svg" alt="" />
                        <div className="mt-[2px] ml-4 w-[450px] bg-[#A2A0A0] h-[10px] rounded-sm"></div>
                        <span className="text-[#00000099] text-[18px]">
                            (388)
                        </span>
                    </div>
                    <div className="flex items-center gap-[5px] mt-[12px]">
                        <span>2</span>
                        <img src="/assets/svg/star_mini.svg" alt="" />
                        <div className="mt-[2px] ml-4 w-[70px] bg-[#D9D9D9] h-[10px] rounded-sm"></div>
                    </div>
                    <div className="flex items-center gap-[5px] mt-[12px]">
                        <span>3</span>
                        <img src="/assets/svg/star_mini.svg" alt="" />
                        <div className="mt-[2px] ml-4 w-[70px] bg-[#D9D9D9] h-[10px] rounded-sm"></div>
                    </div>
                    <div className="flex items-center gap-[5px] mt-[12px]">
                        <span>4</span>
                        <img src="/assets/svg/star_mini.svg" alt="" />
                        <div className="mt-[2px] ml-4 w-[70px] bg-[#D9D9D9] h-[10px] rounded-sm"></div>
                    </div>
                    <div className="flex items-center gap-[5px] mt-[12px]">
                        <span>5</span>
                        <img src="/assets/svg/star_mini.svg" alt="" />
                        <div className="mt-[2px] ml-4 w-[70px] bg-[#D9D9D9] h-[10px] rounded-sm"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product_Review;
