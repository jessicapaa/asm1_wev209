import React from "react";

type Props = {};

const Cate_ListProduct = (props: Props) => {
    return (
        <>
            <div className="header_listProduct py-8">
                <div className="container">
                    <h1 className="text-[#505F4E] text-[30px] leading-[20px] font-semibold">
                        Töpfe & Behälter
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center  px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
                        <img
                            className="bg-transparent mr-[3px]"
                            src="/assets/img/cate_product_3.png"
                            alt=""
                        />
                        <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                            Eckige Töpfe
                        </h3>
                    </div>
                    <div className="flex items-center  px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
                        <img
                            className="bg-transparent mr-[3px]"
                            src="/assets/img/cate_product_3.png"
                            alt=""
                        />
                        <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                            Runde Töpfe
                        </h3>
                    </div>
                    <div className="flex items-center  px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
                        <img
                            className="bg-transparent mr-[3px]"
                            src="/assets/img/cate_product_3.png"
                            alt=""
                        />
                        <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                            Untersetzer
                        </h3>
                    </div>
                    <div className="flex items-center  px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
                        <img
                            className="bg-transparent mr-[3px]"
                            src="/assets/img/cate_product_3.png"
                            alt=""
                        />
                        <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                            Pflanzschalen
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cate_ListProduct;
