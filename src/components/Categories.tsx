import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICategory } from "../Interface/Category";
import { IProduct } from "../Interface/Product";

interface CategoryWithCount extends ICategory {
    count: number;
}

function Categories() {
    const [categoriesWithCounts, setCategoriesWithCounts] = useState<
        CategoryWithCount[]
    >([]);

    const { data: categoriesData } = useQuery({
        queryKey: ["categories"],
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

    const { data: productsData } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                return await axios.get<IProduct[]>(
                    `http://localhost:3000/products`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    useEffect(() => {
        if (categoriesData?.data && productsData?.data) {
            const categoryCounts: { [key: string]: number } = {};

            productsData.data.forEach((product) => {
                const category = product.category?.trim();
                if (category) {
                    categoryCounts[category] =
                        (categoryCounts[category] || 0) + 1;
                }
            });

            const updatedCategories = categoriesData.data.map((category) => ({
                ...category,
                count: category.name
                    ? categoryCounts[category.name.trim()] || 0
                    : 0,
            }));

            setCategoriesWithCounts(updatedCategories);
        }
    }, [categoriesData, productsData]);

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
                    {categoriesWithCounts.map((category) => (
                        <div
                            key={category.id}
                            className="item opacity-65 hover:opacity-100 cursor-pointer relative rounded"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="object-cover w-[300px] h-[374px]"
                            />
                            <div className="body absolute right-[15px] top-[20px]">
                                <h3 className="text-white text-[18px] font-semibold leading-[20px]">
                                    {category.name}
                                </h3>
                                <span className="text-white font-semibold text-[14px] leading-[16px] tracking-[0.3px]">
                                    {category.count} items
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Categories;
