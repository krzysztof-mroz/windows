import "tachyons";
import styles from "./Index.module.css";

const stylListy = `${styles.menu} overflow-hidden db-l w-100-l w-70 list pa0 ma0 mt1-l pt1 f2 f3-l`;

function StartPage() {
  return (
    <div>
      <nav className="w-100 fixed top-0 bg-dark-gray">
        <input type="checkbox" id="burger" className="dn" />
        <label for="burger" className="dn-l fr pr5 f2">
          <i className="fa fa-bars white"></i>
        </label>
        <ul className={stylListy}>
          <li className="fl pl5 pl6-l">
            <a href="/nav-menu.html">
              <img
                src="https://dwyl.com/img/favicon-32x32.png"
                alt="dwyl logo"
              />
            </a>
          </li>
          <li className="di-l pl6 tl pt5-m pb2-m">
            <a href="#" className="white link">
              Portfolio
            </a>
          </li>
          <li className="pl5 pl6-m di-l tl pb2-m">
            <a href="#" className="white link">
              Blog
            </a>
          </li>
          <li className="pl5 pl6-m di-l tl pb2-m">
            <a href="#contact" id="contact-link" className="white link">
              Contact
            </a>
          </li>
          <li className="pl5 pl6-m di tr pb2-m">
            <a href="#contact" id="contact-link" className="white link">
              BURGER
            </a>
          </li>
        </ul>
      </nav>

      <div className="cf pt5 ">
        <h1 className="tc bg-black-20 pa2 ma5">Polnische Fenster</h1>
        <div className="glow fl h-10 w-50 w-third-ns w-20-m w-10-l di pv2 v-top  tc ws-normal bg-black-20">
          123 Abc
        </div>
        <div className=" b--dotted grow fl w-50 w-third-ns  w-20-m w-10-l dn dib-ns tc pv2 bg-black-10">
          2
        </div>
        <div className="dim fl w-50 w-third-ns  dn dib-ns w-20-m w-10-l tc pv2 bg-black-05">
          3
        </div>
        <div className="underline-hover fl w-50 w-third-ns  w-20-m w-10-l dn dib-ns tc pv2 bg-black-10">
          4
        </div>
        <div className="fl w-50 w-third-ns  dn dib-ns w-20-m w-10-l tc pv2 bg-black-20">
          5
        </div>
      </div>
      <div className="outline w-50 pa3 tc flex items-center">
        <div className="outline w-25 pa3 mr2 h2">
          <code>1</code>
        </div>
        <div className="outline w-25 pa3 mr2">
          <code>2</code>
        </div>
        <div className="outline w-25 pa3 mr2 h4">
          <code>3</code>
        </div>
        <div className="outline w-25 pa3 mr2">
          <code>4</code>
        </div>
        <div className="outline w-25 pa3 h5">
          <code>5</code>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
