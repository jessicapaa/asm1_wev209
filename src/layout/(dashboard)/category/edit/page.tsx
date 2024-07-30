import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ICategory } from "../../../../Interface/Category";
import axios from "axios";
type FieldType = {
    name?: string;
    image?: string;
};
const CategoryPageEdit = () => {
    const { id } = useParams();
    console.log(id);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["category", id],
        queryFn: async () => {
            try {
                return await axios.get<ICategory>(
                    `http://localhost:3000/category/${id}`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });

    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useMutation({
        mutationFn: async (category: FieldType) => {
            try {
                return await axios.put<ICategory>(
                    `http://localhost:3000/category/${id}`,
                    category
                );
            } catch (error) {
                throw new Error("Cập nhật danh mục thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Danh mục đã được cập nhật thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["category", id],
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

    console.log(data?.data);

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold text-green-500">
                    Cập nhật : {data?.data.name}
                </h1>
                <Button type="primary">
                    <Link to="/admin/category">
                        <BackwardFilled /> Quay về trang quản lý danh mục
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ ...data?.data }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên danh mục"
                        name="name"
                        rules={[
                            {
                                min: 4,
                                message: "Tên danh mục phải lớn hơn 4 ký tự",
                            },
                            {
                                whitespace: true,
                                message: "Không được để trống danh mục",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Ảnh danh mục"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập link ảnh danh mục",
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

export default CategoryPageEdit;
