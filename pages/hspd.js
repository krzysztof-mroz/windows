import { Fragment } from "react";
import Head from 'next/head';

import HeaderDiv from "../components/ui/headerdiv";

import ProductVisualisation from "../components/ui/productvisualisation"


function HsPd() {
    
  
  return (


    <Fragment>
      <Head>
        <title>Polnische Fenster Schüco Living Slide</title>
        <meta name='description'
              content='Kömmerling Hebe Schiebe Premidoor 88 visualisierung. 3d Visualisierung'
        />
         <meta name='keywords'
              content='fenster, kunststofffenster, fenster aus polen, kömmerling, hebe schiebe, hs, preimdoor'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Kömmerling Hebe Schiebe Türen" />
      <ProductVisualisation product="hspd" camera="48,48,48" productName="HS Kömmerling Preimdoor 88"/>
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l mt1 mt5-l">
        <h5 className="gray">Kömmerling Premidoor 88</h5>
         
        <ul className="gray f6 tl">
					   <li>PremiDoor 88 ist eine komplett neu konstruierte Hebe-Schiebetür.</li>
             <li>Höchster Öffnungs- und Schließkomfort, mit exzellenten Dämmwerten und mit einer architektonisch eleganten Ästhetik. Schlagregenschutz, Winddichtigkeit und Schallschutz.</li>
					   <li>Eine neuartige Dichtungstechnologie, bei der drei Ebenen perfekt zusammenwirken.</li>
					   <li>Große Bautiefe, die eine hohe Stabilität und exzellente Dämmwerte sowie ein großes Verglasungsspektrum bis 56 mm </li>
					   <li>Alle Kunststoff-Profile werden im Frischmaterial ausschließlich mit bleifreien Stabilisatoren auf Calcium/Zink-Basis hergestellt.</li>
					    <li>Erstklassiger Wärmedurchgangskoeffizient von Uf - Mittelwert = 1,3 W/(m²K). </li>
					    <li>Zargenbautiefe von 207 mm.</li>
					    <li>Barrierefreier Übergang von innen nach außen - hochdämmende WPC Bodenschwelle.</li>
					   <li>Verschiedene Farbvarianten.</li>
             <li>Sichere Funktion, hoher Bedienungskomfort, schwebend leicht zu öffnen und schließen.</li>
				  </ul>
        
        
        </div>
        <div className="w-100 w-40-l b--moon-gray pa2 silver">
          <img  src="/HS_PD_concrete_anth_logo.jpg"></img>
        </div>
      </div>

     
     
    </Fragment>
  );
}

export default HsPd;
