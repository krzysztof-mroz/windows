import { Fragment } from "react";
import { useState, useEffect } from 'react';
import Head from "next/head";

import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel"



import "react-multi-carousel/lib/styles.css";




function StartPage() {

  const size = useWindowSize();

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: 1536 > window.innerWidth ? window.innerWidth : 1536,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
     
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const aehnliche = [
  <ProductLink tekscior="item 1" />,
  <ProductLink tekscior="item 2" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />,
  <ProductLink tekscior="item 3" />,
  <ProductLink tekscior="item 4" />  ,
  <ProductLink tekscior="item 5" />
]
 
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Kunststoff und Aluminium</title>
        <meta name='description'
              content='Schüco, Kömmerling, Ponzio und Aluprof Fenster aus Polen mit Montage. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kunststoff und Aluminium Fenster aus Polen" />
      <Visualisation />

     

      <Carousel show={Math.floor((size.width-50)/186)}>
           
            
          {aehnliche}
        </Carousel>
       
       
  
  <Description />
      <WarumDiv />
      <ActionDiv />
    </Fragment>
  );
}

export default StartPage;
