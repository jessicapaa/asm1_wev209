import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Image, message, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import { IProduct } from "../../../Interface/Product";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Props = {};

const ProductPage = (props: Props) => {
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
    const dataSource = data?.data.map((product: IProduct) => ({
        key: product.id,
        ...product,
    }));

    const { mutate } = useMutation({
        mutationFn: async (id: string | number) => {
            try {
                return await axios.delete<IProduct>(
                    `http://localhost:3000/products/${id}`
                );
            } catch (error) {
                throw new Error("Xóa sản phẩm thất bại");
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Sản phẩm đã được xóa thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["products"],
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
            title: "Tên sản phẩm",
            dataIndex: "name",
        },
        {
            key: "price",
            title: "Gía sản phẩm",
            dataIndex: "price",
        },
        {
            key: "category",
            title: "Danh mục",
            dataIndex: "category",
        },
        {
            key: "description",
            title: "Mô tả",
            dataIndex: "description",
            width: 350,
        },
        {
            key: "image",
            title: "Ảnh sản phẩm",
            dataIndex: "image",
            width: 250,
            render: (_: any, product: IProduct) => (
                <Image width={110} src={product.image} />
            ),
        },
        {
            key: "action",
            render: (_: any, product: IProduct) => {
                return (
                    <div className="flex space-x-3 ">
                        <Popconfirm
                            title="Xóa sản phẩm "
                            description="Bạn có chắc muốn xóa sản phẩm không ?"
                            onConfirm={() => mutate(product.id!)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>

                        <Button>
                            <Link to={`/admin/products/edit/${product.id}`}>
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
                    Quản lý sản phẩm
                </h1>
                <Button type="primary">
                    <Link to="/admin/products/add">
                        <PlusCircleFilled /> Thêm sản phẩm
                    </Link>
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductPage;
