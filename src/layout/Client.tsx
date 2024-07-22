import React from "react";
import Header from "./client/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./client/Footer";

const Client = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <Header />
            <main className={location.pathname == "/" ? "home" : ""}>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default Client;
