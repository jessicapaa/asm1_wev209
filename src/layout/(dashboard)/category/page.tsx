import { PlusCircleFilled } from "@ant-design/icons";
import { Button, message, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICategory } from "../../../Interface/Category";

const CategoryPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                return await axios.get<ICategory[]>(
                    ` http://localhost:3000/category`
                );
            } catch (error) {
                throw new Error("Call API thất bại");
            }
        },
    });
    const dataSource = data?.data.map((category: ICategory) => ({
        key: category.id,
        ...category,
    }));

    const { mutate } = useMutation({
        mutationFn: async (id: string | number) => {
            try {
                return await axios.delete<ICategory>(
                    `http://localhost:3000/category/${id}`
                );
            } catch (error) {
                throw new Error("Xóa danh mục thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Danh mục đã được xóa thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["category"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "success",
                content: error.message,
            });
            throw error;
        },
    });
    const columns = [
        {
            key: "Name",
            title: "Tên Danh mục",
            dataIndex: "name",
        },

        {
            key: "action",
            render: (_: any, category: ICategory) => {
                return (
                    <div className="flex space-x-3">
                        <Popconfirm
                            title="Xóa Danh mục "
                            description="Bạn có chắc muốn xóa danh mục không ?"
                            onConfirm={() => mutate(category.id!)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                        <Button>
                            <Link to={`/admin/category/edit/${category.id}`}>
                                Cập nhật
                            </Link>
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold text-green-500">
                    Quản lý danh mục
                </h1>
                <Button type="primary">
                    <Link to="/admin/category/add">
                        <PlusCircleFilled /> Thêm danh mục
                    </Link>
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default CategoryPage;
