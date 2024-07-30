import React from "react";
import Slide from "./Slide";
import ProductItem from "./ProductItem";
import About from "./About";
import Categories from "./Categories";
import FeedBack from "./FeedBack";

const HomePage = () => {
    return (
        <>
            <Slide />
            <ProductItem />
            <About />
            <Categories />
            <FeedBack />
        </>
    );
};

export default HomePage;
