import { useRouter } from "next/router";

function tuerendiv() {
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
        <img src="./pics/icons/veyna.jpg"></img>
        <h5>Veyna Kunststoff Türfüllungen</h5>
        <p className="gray f6">
          Kunststofffüllungen für Haustüren. Für Haustüren mit Kömmerling
          Profil.
        </p>
      </div>

      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3">
        <img src="./pics/icons/doorfeather.png"></img>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoPerito}
      >
        <img src="./pics/icons/perito.jpg"></img>
        <h5>Perito Kunststoff Türfüllungen</h5>
        <p className="gray f6">
          Kunststofffüllungen für Haustüren. Für Haustüren mit Schüco Profil.
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeynaAlu}
      >
        <img src="./pics/icons/veynaalu.png"></img>
        <h5>Veyna Aluminium Türfüllungen.</h5>
        <p className="gray f6">
          Aluminium Füllungen für Haustüren. Als Einsatzfüllungen und
          flügelüberdeckend. Für Ponzio Aluminium Haustüren.
        </p>
      </div>
      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoAluprof}
      >
        <img src="./pics/icons/aluprof.png"></img>
        <h5>Aluprof Aluminium Türfüllungen</h5>
        <p className="gray f6">
          Aluminium Füllungen für Haustüren. Als Einsatzfüllungen und
          flügelüberdeckend. Für Aluprof Aluminium Haustüren.
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim">
        <img src="./pics/icons/musterecke.png"></img>
        <h5>Parameter der Haustüren</h5>
        <p className="gray f6">
          Details zum Beschlag, Profil, Füllung, Wärmedämmung und weiteres.
        </p>
      </div>
    </div>
  );
}

export default tuerendiv;
