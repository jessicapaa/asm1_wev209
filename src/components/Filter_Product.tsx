import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { ICategory } from "../Interface/Category";

const Filter_Product = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
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
            <div>
                <h3 className="text-[#505F4E] text-[30px] leading-[20px] font-bold mb-[30px]">
                    Kategorien
                </h3>

                {/* Form group */}
                <form action="">
                    {cate?.data.map((category: ICategory) => (
                        <label
                            htmlFor={category.id}
                            className="form__checkbox mb-[12px]"
                        >
                            <input
                                id={category.id}
                                type="checkbox"
                                className="hidden bg-transparent "
                            />
                            <span className="ml-[29px] capitalize font-[15px]">
                                {category.name}
                            </span>
                        </label>
                    ))}
                </form>
            </div>

            <div>
                <p className="text-[#333333] text-[17px] font-bold w-[233px] mt-[24px]">
                    Filter By Price
                </p>
                <div className="w-[233px] h-[9px] my-2 flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-[9px] bg-[#4E7C32] appearance-none cursor-pointer range-slider rounded-md"
                        style={{
                            outline: "none",
                        }}
                    />
                </div>

                <span className="flex w-[233px] text-[15.043px] text-[#1E1E1E] font-normal">
                    <p className="mr-[65px]">From $0 to $8000</p>
                    <p>Filter</p>
                </span>
            </div>

            <div>
                <p className="text-[#333333] text-[17px] font-bold w-[233px] mt-[40px]">
                    Filter By Size
                </p>
                <div className="w-[233px]  my-2 h-[9px] flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-[9px] bg-[#4E7C32] appearance-none cursor-pointer range-slider rounded-md"
                        style={{
                            outline: "none",
                        }}
                    />
                </div>

                <span className="flex w-[233px] text-[15.043px] text-[#1E1E1E] font-normal">
                    <p className="mr-[65px]">2 mm by 50</p>
                    <p>Filter</p>
                </span>
            </div>
        </>
    );
};

export default Filter_Product;
