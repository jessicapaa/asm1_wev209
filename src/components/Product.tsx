import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { IProduct } from "../Interface/Product";
import Filter_Product from "./Filter_Product";

function Product() {
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<
        string | undefined
    >();
    const [searchTerm, setSearchTerm] = useState<string>("");

    const location = useLocation(); // Hook để lấy URL hiện tại

    const { data: productss } = useQuery({
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
        // Xử lý tìm kiếm từ URL
        const queryParams = new URLSearchParams(location.search);
        const search = queryParams.get("search") || "";
        setSearchTerm(search);
    }, [location.search]);

    useEffect(() => {
        let filtered = productss?.data || [];

        if (searchTerm) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(
                (product) =>
                    product.category?.trim() === selectedCategory.trim()
            );
        }

        setFilteredProducts(filtered);
    }, [selectedCategory, searchTerm, productss]);

    return (
        <div className="container">
            <div className="flex gap-[30px]">
                <div className="flex items-center">
                    <span>Sort By :</span>
                    <form
                        className="w-[220px] h-[40px] flex items-center border-w"
                        autoComplete="off"
                    >
                        <select className="mx-2 rounded-lg px-2 border-2 border-solid border-[#eee] text-[16px] leading-[25px] w-full h-full outline-none">
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
                        className="w-[220px] h-[40px] flex items-center border-w"
                        autoComplete="off"
                    >
                        <select className="mx-2 rounded-lg px-2 border-2 border-solid border-[#eee] text-[16px] leading-[25px] w-full h-full outline-none">
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
            <div className="flex justify-between">
                <div className="grid grid-cols-3 gap-[22px] pt-[80px]">
                    {filteredProducts.map((product: IProduct) => (
                        <div
                            className="relative product_item py-3 px-4 max-w-[300px] border-2 border-solid border-[#eee]"
                            key={product.id}
                        >
                            <Link to={`/product/detail/${product.id}`}>
                                <img
                                    src={product.image}
                                    className="mx-auto w-[242px] h-[240px] object-cover"
                                    alt="img..loading"
                                />
                            </Link>
                            <div className="info mt-[22px]">
                                <Link to={`/product/detail/${product.id}`}>
                                    <h3 className="text-[#333] text-[17px] font-bold leading-[25px]">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex justify-between items-center gap-2 mt-2">
                                    <p className="text-[#505F4E] font-medium text-[14px] leading-[22px]">
                                        {product.price}
                                    </p>
                                    <span className="text-[14px] leading-[22px] text-[#828282]">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ml-10">
                    <Filter_Product onFilterChange={setSelectedCategory} />
                </div>
            </div>
        </div>
    );
}

export default Product;
