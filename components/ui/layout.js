import { Fragment } from "react";
import "tachyons";

import NaviBar from "./navibar";
import FooterDiv from "./footerdiv";

function Layout(props) {
  return (
    <Fragment>
      <div className=" w-100-l">
        <NaviBar />

        <div
          className="flex flex-wrap justify-center mh2 mh6-l mw9"
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
