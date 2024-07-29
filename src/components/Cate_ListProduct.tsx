import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ICategory } from "../Interface/Category";

type Props = {};

const Cate_ListProduct = (props: Props) => {
    const { data: cate } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            try {
                return await axios.get<ICategory[]>(
                    ` http://localhost:3000/category`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });
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
                <div className="flex flex-wrap gap-y-6 items-center justify-between ">
                    {cate?.data.map((category: ICategory) => (
                        <div className="flex items-center   px-[6px] py-2 bg-[#D2E8CD] rounded w-[193px] cursor-pointer">
                            <img
                                className="bg-transparent mr-[3px]"
                                src="/assets/img/cate_product_3.png"
                                alt=""
                            />
                            <h3 className="hover:text-white text-[#665345] capitalize font-semibold text-[15px]">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cate_ListProduct;
