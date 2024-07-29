import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    Button,
    Form,
    FormProps,
    Input,
    InputNumber,
    message,
    Select,
} from "antd";
import { Link, useParams } from "react-router-dom";
import { ICategory } from "../../../../Interface/Category";
import axios from "axios";
import { IProduct } from "../../../../Interface/Product";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
type FieldType = {
    name?: string;
    category?: string;
    price?: number;
    description?: string;
    image?: string;
};
const ProductEditPage = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState<ICategory[]>([]);
    console.log(id);
    const queryClient = useQueryClient();

    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            try {
                return await axios.get<IProduct>(
                    `http://localhost:3000/products/${id}`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    const { data: category } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            try {
                const response = await axios.get<ICategory[]>(
                    "http://localhost:3000/category"
                );
                setCategories(response.data);
                console.log(response.data);

                return response.data;
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });
    console.log(category);

    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useMutation({
        mutationFn: async (category: FieldType) => {
            try {
                return await axios.put<IProduct>(
                    `http://localhost:3000/products/${id}`,
                    category
                );
            } catch (error) {
                throw new Error("Cập nhật sản phẩm thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Sản phẩm đã được cập nhật thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["product", id],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        mutate(values);
    };
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    console.log(product?.data);

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold text-green-500">
                    Cập nhật : {product?.data.name}
                </h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay về trang quản lý sản phẩm
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ ...product?.data }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    {/* tên */}
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Tên sản phẩm bắt buộc phải có và lớn hơn 4 ký tự",
                            },
                            {
                                min: 6,
                                message: "Tên sản phẩm phải lớn hơn 6 ký tự",
                            },
                            {
                                whitespace: true,
                                message: "Không được để trống tên sản phẩm",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    {/* giá */}
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "Giá sản phẩm bắt buộc phải có!",
                            },
                            {
                                pattern: new RegExp(/^[0-9]+$/),
                                message: "Gía sản phẩm phải là số dương",
                            },
                        ]}
                    >
                        <InputNumber addonAfter="Vnd" />
                    </Form.Item>
                    {/* danh mục */}
                    <Form.Item
                        label="Danh mục"
                        name="category"
                        rules={[{ required: true, message: "Chọn danh mục" }]}
                    >
                        <Select defaultValue="Danh mục sản phẩm">
                            {categories.map((category) => (
                                <Select.Option
                                    key={category.id}
                                    value={category.name}
                                >
                                    {category.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* mô tả */}
                    <Form.Item<FieldType>
                        label="Mô tả sản phẩm"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mô tả sản phẩm",
                            },
                        ]}
                        name="description"
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    {/* ảnh */}
                    <Form.Item<FieldType>
                        label="Ảnh sản phẩm"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập link ảnh sản phẩm",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            {isPending ? (
                                <>
                                    <Loading3QuartersOutlined className="animate-spin" />
                                    Submitting
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductEditPage;
