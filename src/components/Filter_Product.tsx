import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ICategory } from "../Interface/Category";

interface FilterProductProps {
    onFilterChange: (category: string | undefined) => void;
}

const Filter_Product: React.FC<FilterProductProps> = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState<
        string | undefined
    >();

    const { data: cate } = useQuery({
        queryKey: ["cate"],
        queryFn: async () => {
            try {
                return await axios.get<ICategory[]>(
                    `http://localhost:3000/category`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    useEffect(() => {
        onFilterChange(selectedCategory);
    }, [selectedCategory, onFilterChange]);

    return (
        <div>
            <h3 className="text-[#505F4E] text-[30px] leading-[20px] font-bold mb-[30px]">
                Kategorien
            </h3>
            <form>
                {cate?.data.map((category: ICategory) => (
                    <label
                        htmlFor={category.id?.toString()}
                        key={category.id}
                        className="form__checkbox mb-[12px]"
                    >
                        <input
                            id={category.id?.toString()}
                            type="radio"
                            name="category"
                            checked={category.name === selectedCategory}
                            onChange={(e) => {
                                if (category.name !== undefined) {
                                    setSelectedCategory(
                                        e.target.checked
                                            ? category.name
                                            : undefined
                                    );
                                }
                            }}
                            className="bg-transparent"
                        />
                        <span className="ml-[29px] capitalize font-[15px]">
                            {category.name}
                        </span>
                    </label>
                ))}
                <label htmlFor="all" className="form__checkbox mb-[12px]">
                    <input
                        id="all"
                        type="radio"
                        name="category"
                        checked={selectedCategory === undefined}
                        onChange={() => setSelectedCategory(undefined)}
                        className="bg-transparent"
                    />
                    <span className="ml-[29px] capitalize font-[15px]">
                        Tất cả
                    </span>
                </label>
            </form>
        </div>
    );
};

export default Filter_Product;
