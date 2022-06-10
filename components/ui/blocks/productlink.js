import styles from './productlink.module.css' 
import Link from "next/link";




function ProductLink(props) {
  return (
    

      
    <div className="flex flex-column tc justify-around fl b--moon-gray  ma2 pa2 w3-border-orange w3-sand" style={{width: 170}}>
    <img src={props.pic}></img>
    <p className='f6 fw4'>{props.opis}</p>
    <Link href={props.href}>
            <a className="f6 fw4 dim underline   db dib-l pv2 ph3">
              <b>{props.linktext}</b>
            </a>
          </Link>  
  </div>
       
     
    
  );
}

export default ProductLink;

{/**  
<div className="flex flex-wrap justify-around fl w-100 b--moon-gray pa2">
      <button
          className="w3-button w3-border w3-border-orange w3-sand mv3 w-100 mt5"
          type="submit"
          data-toggle="tooltip"
          data-placement="top"
          onMouseDown={() => {}}
        >
             <div className="w-100">
             <img src="/pics/producticons/ct70_ht.png"></img>
             </div>
             <p className="gray f6">Schüco Schüco Schüco Schüco Schüco Schüco Schüco Schüco Schüco Schüco<br/>CT 70<br/>Haustür</p>
        </button> 
      </div>





        <div className="flex flex-column tc justify-around fl b--moon-gray ba ma2 pa2" style={{width: 130}}>
    <img src="/pics/producticons/ct70_ht.png"></img>
    <p>vercel</p> <a href="#">estiamted groan turbo mobile</a>
    <Link href="/tueren">
            <a className="f6 fw4 dim no-underline   db dib-l pv2 ph3">
              Haustüren
            </a>
          </Link>  
  </div>
       

**/}
