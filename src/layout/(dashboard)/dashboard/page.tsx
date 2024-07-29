import { Button } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div>
            <h1>hahahahaha</h1>
            <Button danger>Default</Button>
            <Button type="primary" className="bg-red-500">
                Button
            </Button>
        </div>
    );
    <Outlet />;
};

export default Dashboard;
