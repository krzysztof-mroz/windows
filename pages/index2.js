import { Fragment } from "react";
import Head from "next/head";

import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel";



import "react-multi-carousel/lib/styles.css";

function StartPage() {
  return (
    <Fragment>

      <div className="flex flex-wrap justify-around mb1 w-100">

      <Carousel show={3}>
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <ProductLink />
          
        </Carousel>
       
       
  </div>
    </Fragment>
  );
}

export default StartPage;
