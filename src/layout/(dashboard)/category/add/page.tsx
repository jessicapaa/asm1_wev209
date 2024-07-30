import { BackwardFilled } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../../Interface/Category";
import axios from "axios";
type FieldType = {
    name?: string;
    image?: string;
};
const CategoryPageAdd = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { mutate } = useMutation({
        mutationFn: async (category: FieldType) => {
            try {
                return await axios.post<ICategory>(
                    `http://localhost:3000/category`,
                    category
                );
            } catch (error) {
                throw new Error("Thêm danh mục thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Danh mục đã được thêm thành công",
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

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold text-green-500">
                    Thêm danh mục
                </h1>
                <Button type="primary">
                    <Link to="/admin/category">
                        <BackwardFilled /> Quay về trang quản lý danh mục
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
                    <Form.Item<FieldType>
                        label="Tên danh mục"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Tên danh mục bắt buộc phải",
                            },
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
                            Thêm danh mục
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default CategoryPageAdd;
