import { Fragment } from "react";
//import 'tachyons';

import NaviBar from "./navibar";
import FooterDiv from "./footerdiv";
import Schnellkontakt from "./schnellkontakt";

function Layout(props) {
  return (
    <Fragment>
      <div className="siteShell">
        <NaviBar />

        <div
          className="siteBody"
        >
          <main className="siteMain">{props.children}</main>

          <div className="siteQuickContact">
            <Schnellkontakt />
          </div>

          <FooterDiv />
        </div>

        <style jsx global>{`
          .siteShell {
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 1120px;
            padding: 0 8px;
            width: 100%;
          }

          .siteBody {
            margin-top: 70px;
          }

          .siteQuickContact {
            margin: 34px auto 22px;
            max-width: 1120px;
            width: 100%;
          }

          .siteMain .mw7,
          .siteMain .mw8,
          .siteMain .mw9 {
            max-width: 1120px;
          }

          .siteMain .center.mw7,
          .siteMain .center.mw8,
          .siteMain .center.mw9 {
            margin-left: auto;
            margin-right: auto;
          }

          @media (min-width: 760px) {
            .siteShell {
              padding-left: 0;
              padding-right: 0;
            }
          }
        `}</style>
      </div>
    </Fragment>
  );
}

export default Layout;
