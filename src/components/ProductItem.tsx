import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../Interface/Product";

const ProductItem = () => {
    const { data } = useQuery({
        queryKey: ["prod"],
        queryFn: async () => {
            try {
                return await axios.get<IProduct[]>(
                    ` http://localhost:3000/products`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });
    console.log(data?.data);
    return (
        <>
            <div className="container">
                <h2 className="text-[#505F4E] font-bold text-[30px] tracking-[1.05px] capitalize">
                    best sellers
                </h2>
            </div>
            <div className="bg-white">
                <div className="container ">
                    <div className="flex product_list gap-x-2 overflow-hidden gap-y-10 flex-wrap items-center justify-between">
                        {data?.data.map((product: IProduct) => (
                            <div className="col-span-1 product">
                                <Link to={"product/list"}>
                                    <img
                                        className="object-cover w-[260px] h-[250px]"
                                        src={product.image}
                                        alt=""
                                    />
                                </Link>
                                <Link to={"product/list"}>
                                    <h3 className="mt-6 w-[200px] text-[16px] text-[#665345] font-semibold leading-[20px]">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-[#777] text-[12px] capitalize">
                                        {product.category}
                                    </span>
                                    <span className="text-[#665345] text-[14px] font-semibold capitalize">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
