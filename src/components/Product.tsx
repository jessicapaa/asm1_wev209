import React from "react";
import Filter_Product from "./Filter_Product";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../Interface/Product";
import axios from "axios";

type Props = {};

function Product({}: Props) {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
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
    const dataSource = data?.data.map((product: IProduct) => ({
        key: product.id,
        ...product,
    }));
    return (
        <>
            <div className="container">
                <div className="flex gap-[30px]">
                    <div className="flex items-center">
                        <span>Sort By :</span>
                        <form
                            className="w-[220px] h-[40px] flex items-center border-w "
                            autoComplete="off"
                        >
                            <select className="mx-2 rounded-lg px-2 border-2 border-solid border-[#eee] text-[16px] leading-[25px] w-full h-full  outline-none">
                                <option className="rounded-2xl" value="">
                                    On top
                                </option>
                                <option
                                    className="text-black text-[16px] leading-[25px]"
                                    value="Newest"
                                >
                                    Newest
                                </option>
                                <option
                                    className="text-back text-[16px] leading-[25px]"
                                    value="abc"
                                >
                                    Brand
                                </option>
                                <option
                                    className="text-black text-[16px] leading-[25px]"
                                    value="xyz"
                                >
                                    Trending
                                </option>
                            </select>
                        </form>
                    </div>

                    <div className="flex items-center">
                        <span>Show :</span>
                        <form
                            className="w-[220px] h-[40px] flex items-center border-w "
                            autoComplete="off"
                        >
                            <select className="mx-2 rounded-lg px-2 border-2 border-solid border-[#eee] text-[16px] leading-[25px] w-full h-full  outline-none">
                                <option className="rounded-2xl" value="">
                                    Trend Now
                                </option>
                                <option
                                    className="text-black text-[16px] leading-[25px]"
                                    value="Newest"
                                >
                                    Newest
                                </option>
                                <option
                                    className="text-back text-[16px] leading-[25px]"
                                    value="abc"
                                >
                                    Brand
                                </option>
                                <option
                                    className="text-black text-[16px] leading-[25px]"
                                    value="xyz"
                                >
                                    Trending
                                </option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className="flex justify-between  ">
                    {/* Product Item */}
                    <div className="grid grid-cols-3 gap-[22px] pt-[80px]">
                        {data?.data.map((product: IProduct) => (
                            <div className="relative product_item py-3 px-4 max-w-[300px] border-2 border-solid border-[#eee] ">
                                <Link to={"/product/detail"}>
                                    <img
                                        src={product.image}
                                        className="mx-auto"
                                        alt="img..loading"
                                    />
                                </Link>
                                <div className="info mt-auto">
                                    <Link to={"/product/detail"}>
                                        <h3 className="text-[#333] text-[17px] font-bold  leading-[25px]">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex items-center gap-2 mt-2">
                                        <p className="text-[#505F4E] font-medium text-[14px] leading-[22px]">
                                            {product.price}
                                        </p>
                                        {/* <span className="line-through text-[14px] leading-[22px] text-[#828282]">
                                            $45.00
                                        </span> */}
                                    </div>
                                </div>
                                {/* <div className="sell absolute top-[10px] left-[14px] bg-[#505F4E] flex items-center justify-center rounded text-white w-[48px] h-[24px]">
                                 <span className="font-semibold">sell</span>
                             </div> */}

                                {/* Action  */}
                                <div className="absolute product_act  hidden top-[80px] left-[-28px] translate-x-[50%] item_act flex items-center gap-[13px]">
                                    <div className="w-[40px] bg-white hover:bg-[#4E7C32] h-[34px] hover:text-white text-[#4E7C32] cursor-pointer flex items-center justify-center border-2 border-solid border-[#eee]">
                                        <a href="" className="">
                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.7484 15.5444C15.8342 15.5444 16.7145 14.6874 16.7145 13.6302C16.7145 12.5731 15.8342 11.7161 14.7484 11.7161C13.6625 11.7161 12.7822 12.5731 12.7822 13.6302C12.7822 14.6874 13.6625 15.5444 14.7484 15.5444Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M14.7485 11.7161L14.7484 8.97344C14.7484 8.1032 14.3933 7.26861 13.7612 6.65326L11.097 4.05945"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M11.097 6.79396V4.05945H13.9057"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.19851 7.34088C6.28438 7.34088 7.16465 6.48389 7.16465 5.42673C7.16465 4.36957 6.28438 3.51257 5.19851 3.51257C4.11263 3.51257 3.23236 4.36957 3.23236 5.42673C3.23236 6.48389 4.11263 7.34088 5.19851 7.34088Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.19852 7.34094L5.19863 10.0836C5.19867 10.9538 5.55377 11.7884 6.18584 12.4038L8.8501 14.9976"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M8.84995 12.2631V14.9976H6.04117"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className=" hover:bg-[#4E7C32] bg-white hover:text-white text-[#4E7C32] w-[40px] h-[34px] cursor-pointer flex items-center justify-center border-2 border-solid border-[#eee]">
                                        <a className="">
                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.5806 15.5444H4.22755C4.0893 15.5444 3.95591 15.4948 3.8529 15.405C3.74989 15.3153 3.68449 15.1917 3.66923 15.0579L2.67055 6.30749C2.66183 6.23105 2.66976 6.15367 2.69384 6.08041C2.71792 6.00716 2.7576 5.93967 2.81029 5.88236C2.86298 5.82504 2.9275 5.7792 2.99962 5.74781C3.07175 5.71642 3.14987 5.7002 3.22887 5.7002H16.5793C16.6583 5.7002 16.7364 5.71642 16.8085 5.74781C16.8806 5.7792 16.9452 5.82504 16.9978 5.88236C17.0505 5.93967 17.0902 6.00716 17.1143 6.08041C17.1384 6.15367 17.1463 6.23105 17.1376 6.30749L16.1389 15.0579C16.1236 15.1917 16.0582 15.3153 15.9552 15.405C15.8522 15.4948 15.7188 15.5444 15.5806 15.5444Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M7.09485 7.88781V5.70021C7.09485 4.97497 7.39077 4.27944 7.91752 3.76662C8.44427 3.2538 9.15869 2.9657 9.90363 2.9657C10.6486 2.9657 11.363 3.2538 11.8897 3.76662C12.4165 4.27944 12.7124 4.97497 12.7124 5.70021V7.88781"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className=" w-[40px] h-[34px] bg-white hover:bg-[#4E7C32] hover:text-white text-[#4E7C32] cursor-pointer flex items-center justify-center border-2 border-solid border-[#eee]">
                                        <a href="">
                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.83332 15.5444C9.83332 15.5444 2.81137 11.7161 2.81137 7.06744C2.81151 6.24581 3.10394 5.44959 3.63894 4.81415C4.17394 4.1787 4.91848 3.74326 5.74598 3.58186C6.57348 3.42045 7.43286 3.54305 8.178 3.92879C8.92315 4.31454 9.50808 4.93963 9.83333 5.69779L9.83331 5.6978C10.1586 4.93964 10.7435 4.31454 11.4886 3.9288C12.2338 3.54305 13.0932 3.42045 13.9207 3.58186C14.7482 3.74326 15.4927 4.1787 16.0277 4.81415C16.5627 5.44959 16.8551 6.24581 16.8553 7.06744C16.8553 11.7161 9.83332 15.5444 9.83332 15.5444Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filter Product */}
                    <div className="ml-10">
                        <Filter_Product />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
