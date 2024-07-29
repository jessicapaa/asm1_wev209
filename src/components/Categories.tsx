import { Button } from "antd";
import React from "react";

type Props = {};

function Categories({}: Props) {
    return (
        <>
            <div className="container mt-20">
                <h2 className="text-[#505F4E] font-bold text-[30px] tracking-[1.05px] capitalize">
                    Kategorien
                </h2>
            </div>
            <div className="separate h-[2px] bg-[#0000001a]"></div>
            <div className="container">
                <div className="cate grid grid-cols-4 gap-x-[20px] gap-y-[12px]">
                    {/* item 1 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded ">
                        <img
                            src="/assets/img/cate_1.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px] "
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Beleuchtung
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                30 items
                            </span>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_2.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Dünger
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_3.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Erde & Substrate
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_4.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Bewässerung
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                    {/* item 5 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_5.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Töpfe & Behälter
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                    {/* item 6 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_6.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Growbox
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                    {/* item 7 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_7.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Pflanzen & Gärtnern
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                30 items
                            </span>
                        </div>
                    </div>
                    {/* item 8 */}
                    <div className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded opacity-80">
                        <img
                            src="/assets/img/cate_8.jpg"
                            alt=""
                            className="object-cover w-[300px] h-[374px]"
                        />
                        <div className="body absolute right-[15px] top-[20px]">
                            <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                Lüftung & Klimaanlage
                            </h3>
                            <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                20 items
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
