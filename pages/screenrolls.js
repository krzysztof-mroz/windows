import { Fragment } from "react";
import ScreenDiv from "../components/ui/screendiv";
import HeaderDiv from "../components/ui/headerdiv";
import Head from 'next/head';



function Screenrolls() {
    return (
        <Fragment>
      <Head>
        <title>Screen Roll Rollläden</title>
        <meta
          name="description"
          content="Screen Roll Rollläden aus Polen."
        />
        <meta
          name="keywords"
          content="screen roll, rollläden, material rollläden"
        />
      </Head>
      <HeaderDiv title="Screen Roll Rollläden"/>
      <ScreenDiv />
    </Fragment>
    )
        
    
}

export default Screenrolls;