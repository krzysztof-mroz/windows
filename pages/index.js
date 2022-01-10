import { Fragment } from "react";
import "tachyons";

import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";


function StartPage() {
  return (
    <Fragment>
      <HeaderDiv />
      <Visualisation />
      <Description />
      <WarumDiv />
      <ActionDiv />
    </Fragment>
  );
}

export default StartPage;
