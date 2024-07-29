import React, { useState } from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
// import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[]
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem("Option 1", "1", <PieChartOutlined />),
//     getItem("Option 2", "2", <DesktopOutlined />),
//     getItem("User", "sub1", <UserOutlined />, [
//         getItem("Tom", "3"),
//         getItem("Bill", "4"),
//         getItem("Alex", "5"),
//     ]),
//     getItem("Team", "sub2", <TeamOutlined />, [
//         getItem("Team 1", "6"),
//         getItem("Team 2", "8"),
//     ]),
//     getItem("Files", "9", <FileOutlined />),
// ];

const LayoutAdmin: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: <NavLink to={"/admin"}>Thống kê</NavLink>,
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: (
                                <NavLink to={"/admin/products"}>
                                    Sản phẩm
                                </NavLink>
                            ),
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: (
                                <NavLink to={"/admin/category"}>
                                    Danh mục
                                </NavLink>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {" "}
                    <h1 className="text-center text-3xl m-4">Quản trị</h1>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>...Loading</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Tuanlaph19427 ©{new Date().getFullYear()} Created by Anh
                    Tuan
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
