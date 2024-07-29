import { BackwardFilled } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Input, Form, InputNumber, Select, message } from "antd";
import { Link } from "react-router-dom";
import { ICategory } from "../../../../Interface/Category";
import axios from "axios";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { FormProps } from "react-hook-form";
import { IProduct } from "../../../../Interface/Product";

type FieldType = {
    name?: string;
    category?: string;
    price?: number;
    description?: string;
    image?: string;
};

const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [categories, setCategories] = useState<ICategory[]>([]);

    const { data, isLoading, isError, error } = useQuery({
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
    console.log(data);

    const { mutate } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await axios.post<IProduct>(
                    `http://localhost:3000/products`,
                    product
                );
            } catch (error) {
                throw new Error(`Thêm sản phẩm thất bại`);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công",
            });
            form.resetFields();
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
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold text-green-500">
                    Thêm sản phẩm
                </h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay về trang quản lý sản phẩm
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    // initialValues={{ remember: true }}
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
                                pattern: /^[0-9]+$/,
                                message: "Gía sản phẩm phải là số dương",
                            },
                        ]}
                    >
                        <InputNumber addonAfter="Vnd" />
                    </Form.Item>
                    {/* danh mục */}
                    <Form.Item<FieldType>
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
                            Thêm sản phẩm
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductAddPage;
