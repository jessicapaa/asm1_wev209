import { useRoutes } from "react-router-dom";
import "./App.css";
import Client from "./layout/Client";
import Dashboard from "./layout/Dashboard";
import HomePage from "./components/HomePage";
import Cate_ListProduct from "./components/Cate_ListProduct";
import ListProduct from "./components/ListProduct";
import Product_Detail from "./components/Product_Detail";

function App() {
    const routes = useRoutes([
        {
            path: "",
            Component: Client,
            children: [
                { path: "", element: <HomePage /> },
                { path: "product/list", element: <ListProduct /> },
                { path: "product/detail", element: <Product_Detail /> },
            ],
        },
        { path: "dashboard", Component: Dashboard, children: [] },
    ]);
    return routes;
}

export default App;
