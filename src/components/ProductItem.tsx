import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ProductItem = (props: Props) => {
    return (
        <>
            <div className="container">
                <h2 className="text-[#505F4E] font-bold text-[30px] tracking-[1.05px] capitalize">
                    best sellers
                </h2>
            </div>
            <div className="bg-white">
                <div className="container ">
                    <div className="product_list flex gap-3 items-center justify-between">
                        {/* Item 1 */}
                        <div>
                            <Link to={"product/list"}>
                                <img
                                    className="object-cover w-[165px]"
                                    src="/assets/img/product_1.png"
                                    alt=""
                                />
                            </Link>
                            <Link to={"product/list"}>
                                <h3 className="mt-6 text-[16px] text-[#665345] font-semibold leading-[20px]">
                                    Growbox
                                </h3>
                            </Link>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-[#777] text-[12px] capitalize">
                                    Dress
                                </span>
                                <span className="text-[#665345] text-[14px] font-semibold capitalize">
                                    $ 963.85
                                </span>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div>
                            <Link to={"product/list"}>
                                <img
                                    className="object-cover w-[230px]"
                                    src="/assets/img/product_2.png"
                                    alt=""
                                />
                            </Link>
                            <Link to={"product/list"}>
                                <h3 className="mt-6 text-[16px] text-[#665345] font-semibold leading-[20px]">
                                    Töpfe
                                </h3>
                            </Link>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-[#777] text-[12px] capitalize">
                                    5 by 5 pots for planting
                                </span>
                                <span className="text-[#665345] text-[14px] font-semibold capitalize">
                                    $ 6130.00
                                </span>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div>
                            <Link to={"product/list"}>
                                <img
                                    className="object-cover w-[230px]"
                                    src="/assets/img/product_3.png"
                                    alt=""
                                />
                            </Link>
                            <Link to={"product/list"}>
                                <h3 className="mt-6 text-[16px] text-[#665345] font-semibold leading-[20px]">
                                    Lichthänger-Set
                                </h3>
                            </Link>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-[#777] text-[12px] capitalize">
                                    Light-hanger set
                                </span>
                                <span className="text-[#665345] text-[14px] font-semibold capitalize">
                                    $ 753.00
                                </span>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div>
                            <Link to={"product/list"}>
                                <img
                                    className="object-cover w-[165px]"
                                    src="/assets/img/product_1.png"
                                    alt=""
                                />
                            </Link>
                            <Link to={"product/list"}>
                                <h3 className="mt-6 text-[16px] text-[#665345] font-semibold leading-[20px]">
                                    Licht
                                </h3>
                            </Link>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-[#777] text-[12px] capitalize">
                                    Dress
                                </span>
                                <span className="text-[#665345] text-[14px] font-semibold capitalize">
                                    $ 2364.00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
