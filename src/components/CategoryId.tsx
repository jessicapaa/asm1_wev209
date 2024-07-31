import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { IProduct } from "../Interface/Product";
import { ICategory } from "../Interface/Category";

const CategoryId: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: productsData,
        isLoading: productsLoading,
        error: productsError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const response = await axios.get<IProduct[]>(
                    `http://localhost:3000/products`
                );
                return response.data;
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    const {
        data: categoriesData,
        isLoading: categoriesLoading,
        error: categoriesError,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            try {
                const response = await axios.get<ICategory[]>(
                    `http://localhost:3000/category`
                );
                return response.data;
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    if (productsLoading || categoriesLoading) return <div>Loading...</div>;
    if (productsError) return <div>Error: {productsError.message}</div>;
    if (categoriesError) return <div>Error: {categoriesError.message}</div>;

    // Kiểm tra dữ liệu sản phẩm và danh mục
    const products = Array.isArray(productsData) ? productsData : [];
    const categories = Array.isArray(categoriesData) ? categoriesData : [];

    // Kiểm tra và chuyển id thành chuỗi
    const categoryId = id ? id.toString() : "";

    // Tìm danh mục dựa trên id
    const category = categories.find(
        (cat) => cat.id?.toString() === categoryId
    );

    console.log("categpry", category);

    // Kiểm tra xem category có tồn tại và có name không
    if (!category || !category.name) {
        return <div>No category found with this ID.</div>;
    }

    // Loại bỏ khoảng trắng và chuyển tất cả về chữ thường để so sánh chính xác
    const normalizedCategoryName = category.name.trim().toLowerCase();

    console.log(normalizedCategoryName, ": tên danh mục");

    // Lọc sản phẩm theo tên danh mục
    const filteredProducts = products.filter((product) => {
        // Sử dụng optional chaining để tránh lỗi khi product.category có thể là undefined
        const normalizedProductCategory = product.category
            ?.trim()
            .toLowerCase();
        console.log(normalizedProductCategory, ": tên danh mục sản phẩm");

        return normalizedProductCategory === normalizedCategoryName;
    });

    return (
        <div className="container">
            <h2 className="text-[#505F4E] font-bold text-[30px] tracking-[1.05px] capitalize mt-20">
                Danh mục sản phẩm : {category.name}
            </h2>
            <div className="separate h-[2px] bg-[#0000001a]"></div>
            <div className="grid grid-cols-3 gap-[22px] pt-[80px]">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            className="relative product_item py-3 px-4 max-w-[300px] border-2 border-solid border-[#eee]"
                            key={product.id}
                        >
                            <Link to={`/product/detail/${id}`}>
                                <img
                                    src={product.image}
                                    className="mx-auto w-[242px] h-[240px] object-cover"
                                    alt={product.name}
                                />
                            </Link>
                            <div className="info mt-[22px]">
                                <h3 className="text-[#333] text-[17px] font-bold leading-[25px]">
                                    {product.name}
                                </h3>
                                <div className="flex justify-between items-center gap-2 mt-2">
                                    <p className="text-[#505F4E] font-medium text-[14px] leading-[22px]">
                                        {product.price.toLocaleString()} đ
                                    </p>
                                    <span className="text-[14px] leading-[22px] text-[#828282]">
                                        {product.category || "No Category"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm dựa trên danh mục !</p>
                )}
            </div>
        </div>
    );
};

export default CategoryId;
