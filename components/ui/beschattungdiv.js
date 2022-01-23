import { useRouter } from "next/router";

function beschattungdiv() {
  const router = useRouter();

  function gotoVeyna(e) {
    // router.push("./schuecopvc")
  }
  function gotoPerito(e) {}
  function gotoVeynaAlu(e) {}
  function gotoAluprof(e) {}

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeyna}
      >
        <img src="./pics/icons/rollo.png"></img>
        <h5>Rollläden</h5>
        <p className="gray f6">
          
        </p>
      </div>

      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoPerito}
      >
        <img src="./pics/icons/per.jpg"></img>
        <h5>Raffstoren</h5>
        <p className="gray f6">
         
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeynaAlu}
      >
        <img src="./pics/icons/veyna.png"></img>
        <h5>Screens</h5>
        <p className="gray f6">
          
        </p>
      </div>
      
    </div>
  );
}

export default beschattungdiv;
