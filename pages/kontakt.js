import { Fragment } from "react";
import HeaderDiv from "../components/ui/headerdiv";
import Schnellkontakt from "../components/ui/schnellkontakt";

function Kontakt() {
  return (
    <Fragment>
      <HeaderDiv />
      <div className="flex flex-wrap justify-around mv1 tc fl w-100 ba b--moon-gray pa4">
        <Schnellkontakt />
      </div>
    </Fragment>
  );
}

export default Kontakt;
