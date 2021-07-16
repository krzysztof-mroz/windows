import "tachyons";



//
import styles from "./styles.moduleold.css";


//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//


function StartPage() {

  function toggleNavbar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>








<div className={styles["topnav"]}>
  <a href="#home" className={styles.active} >Logo</a>
 
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  
  <a href="javascript:void(0);" className={styles.icon} onClick={toggleNavbar}>
    <div className="dn-l">
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
    </div>
  </a>
</div>






      <div className="bg-black-50 tc fw9 pb2 pt2">Nav Bar 2</div>
      <div className="mh2 mh4-ns mh6-l mw9">
        <div className="pa4 tc">Icons, logo, hotline</div>
        <div className="tc bg-black-20 pa6 br3 ma2">IMAGE</div>
        <div className="pv3 tl">
          <div className="flex flex-wrap justify-around w-100">
            <h2 className="fl ma2 w-100 w-40-l tl">Title</h2>
            <p className="fr ma2 w-100 w-40-l tl tr-l">Path</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb5 w-100">
          <div className="flex justify-center  fl w-100 w-third-l">
            <div className="ba flex justify-center w-100 w-90-l fl bg-black-10 tc ma2 br3 h5">
              card
            </div>
          </div>
          <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb5 w-100">
          <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
          </div>
          <div className="flex justify-center fl w-100 w-third-l">
            <div className="ba w-100 w-90-l fl bg-black-10 tc ma2 br3 h5">
              card
            </div>
          </div>
        </div>
        <div className="tc bg-black-10 pa6 br3 ma2">FOOTER</div>
      </div>
    </div>
  );





  
}






export default StartPage;
