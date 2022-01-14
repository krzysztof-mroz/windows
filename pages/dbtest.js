import { Fragment } from "react";
import "tachyons";
import Head from 'next/head';
import {sql_query} from "./lib/db"


import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";



function DbTest(props) {

  const {posts} =props;
    console.log(posts);

  


  //async function tescik() {
    //const res = await fetch("http://localhost:3000/api/sqltest");
    //const posts = await res.json();
 
  //console.log (posts);
  //}
  
  //tescik();
  return (



    <Fragment>
      <Head>
        <title>Polnische Fenster aus Kunststoff und Aluminium</title>
        <meta name='description'
              content='Schüco, Kömmerling, Ponzio und Aluprof Fenster aus Polen mit Montage. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, schüco, kömmerling, ponzio, aluprof, fenster konfigurator'
        />
      

      </Head>
      <HeaderDiv />
      <Visualisation />
      <Description />
      <WarumDiv />
      <ActionDiv />

      <dev>

      </dev>

    </Fragment>
  );
}

export async function getServerSideProps() {
  try {
      const results = await sql_query('SELECT * FROM test');
     
      const posts = JSON.parse(JSON.stringify(results))

      
          return {
          props: {posts} 
      };
      
  } catch(e) {
    return {props: {posts:false}} 
  }

}

export default DbTest;
