import { useRoutes } from "react-router-dom";
import "./App.css";
import Client from "./layout/Client";
import HomePage from "./components/HomePage";
import ListProduct from "./components/ListProduct";
import Product_Detail from "./components/Product_Detail";
import LayoutAdmin from "./layout/(dashboard)/layout";
import ProductAddPage from "./layout/(dashboard)/products/add/page";
import ProductPage from "./layout/(dashboard)/products/page";
import ProductEditPage from "./layout/(dashboard)/products/edit/page";
import CategoryPage from "./layout/(dashboard)/category/page";
import CategoryPageAdd from "./layout/(dashboard)/category/add/page";
import CategoryPageEdit from "./layout/(dashboard)/category/edit/page";
import Dashboard from "./layout/(dashboard)/dashboard/page";

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
        {
            path: "admin",
            Component: LayoutAdmin,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                // PRODUCTS
                {
                    path: "products",
                    element: <ProductPage />,
                },
                {
                    path: "products/add",
                    element: <ProductAddPage />,
                },
                {
                    path: "products/edit/:id",
                    element: <ProductEditPage />,
                },
                // CATEGORY
                {
                    path: "category",
                    element: <CategoryPage />,
                },
                {
                    path: "category/add",
                    element: <CategoryPageAdd />,
                },
                {
                    path: "category/edit/:id",
                    element: <CategoryPageEdit />,
                },
            ],
        },
    ]);
    return routes;
}

export default App;
