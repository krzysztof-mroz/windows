import { Fragment } from "react";
//import 'tachyons';

import NaviBar from "./navibar";
import FooterDiv from "./footerdiv";

function Layout(props) {
  return (
    <Fragment>
      <div className="ph2 mw9" style={{margin: "auto"}}>
        <NaviBar />

        <div
         
          style={{ marginTop: "70px" }}
        >
          <main>{props.children}</main>

          <FooterDiv />
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
