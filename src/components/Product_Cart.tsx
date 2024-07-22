import React from "react";

const Product_Cart = () => {
    return (
        <>
            <div className="container mt-[100px]">
                <div className="flex items-center justify-between">
                    <div className="group-images">
                        <div>
                            <img src="/assets/img/product_cart_1.png" alt="" />
                        </div>
                        <div className="mt-[60px] flex items-center justify-center gap-4 ">
                            <img
                                src="/assets/img/product_cart_thumb_2.png"
                                alt=""
                                className="rounded-[10px] img-preview--current img-preview border-solid  "
                            />
                            <img
                                src="/assets/img/product_cart_thumb_2.png"
                                alt=""
                                className="rounded-[10px] img-preview "
                            />
                            <img
                                src="/assets/img/product_cart_thumb_2.png"
                                alt=""
                                className="rounded-[10px] img-preview "
                            />
                        </div>
                    </div>

                    <div className="info">
                        <p className="text-[#4E7C32] text-[14px] font-bold tracking-[1.2px] uppercase">
                            Plant
                        </p>
                        <h1 className="text-[#1D2025] text-[44px] font-bold leading-[48px] w-[490px] mt-5 mb-6">
                            Square cultivation pots 0.27 to 2 litres
                        </h1>
                        <p className="w-[500px] text-[#68707D] text-[16px] font-medium leading-[28px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                        </p>
                        <div className="mt-8 flex gap-3 mb-3">
                            <p className="text-[#1D2025] text-[30px] font-bold leading-[26px]">
                                $125.00
                            </p>
                            <span className=" px-2 bg-[#FFEDE0] rounded-md text-[#505F4E] font-bold leading-[26px] text-[16px]">
                                50%
                            </span>
                        </div>
                        <span className=" text-[#1D2025] text-[16px] font-semibold leading-[26px] tracking-[0.48px] line-through">
                            $250.00
                        </span>
                        <div className="mt-[20px] flex gap-[15px]">
                            <div className="flex w-[180px] px-[10px] py-4 items-center justify-between rounded-[10px] bg-[#F7F8FD] ">
                                <button className="border-none outline-0 bg-transparent">
                                    <img src="/assets/svg/minus.svg" alt="" />
                                </button>
                                <span>1</span>
                                <button className="border-none outline-0 bg-transparent">
                                    <img src="/assets/svg/plus.svg" alt="" />
                                </button>
                            </div>
                            <div>
                                <button className="font-bold text-[16px] text-white w-[273px] justify-center p-[17px] flex items-center gap-[10px] bg-[#4E7C32] rounded-[10px]">
                                    <img
                                        src="/assets/svg/icon_cart.svg"
                                        alt=""
                                    />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product_Cart;
