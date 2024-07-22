import React from "react";
import Slide from "./Slide";
import ProductItem from "./ProductItem";
import About from "./About";
import Categories from "./Categories";
import FeedBack from "./FeedBack";

type Props = {};

const HomePage = (props: Props) => {
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
