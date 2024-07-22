import React from "react";

const Product_Info = () => {
    return (
        <>
            <div className="container mt-[120px]">
                <div>
                    <h3 className="text-[#4E7C32] text-[30px] font-medium">
                        Discription
                    </h3>
                    <p className="mt-4 text-[#665345] text-[20px] font-light w-[852px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled i
                    </p>
                </div>
                <div className="mt-[30px]">
                    <h3 className="text-[#4E7C32] text-[30px] font-medium">
                        About
                    </h3>
                    <p className="mt-4 text-[#665345] text-[20px] font-light w-[852px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled i
                    </p>
                </div>
                <div className="mt-[80px] max-w-[800px] flex justify-end">
                    <a
                        href="#!"
                        className="hover:underline  text-white text-[15px] bg-[#4E7C32] rounded-[99px] py-[6px] px-[16px] "
                    >
                        Write reviews
                    </a>
                </div>
            </div>
        </>
    );
};

export default Product_Info;
