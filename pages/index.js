import "tachyons";
import Description from "../components/ui/description";
import WarumDiv from "../components/ui/warumdiv";
import NaviBar from "../components/ui/navibar";
import HeaderDiv from "../components/ui/headerdiv";
import FooterDiv from "../components/ui/footerdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";


function StartPage() {
  
   return (
    <div className=" w-100-l">
      <NaviBar />

      <div className="flex flex-wrap justify-center mh2 mh6-l mw9" style={{ marginTop: "70px" }} >
        <HeaderDiv />

        <Visualisation/>

        <Description />

        <WarumDiv />

        <ActionDiv />

        <FooterDiv />

        
      </div>
    </div>
  );

  
}

export default StartPage;
