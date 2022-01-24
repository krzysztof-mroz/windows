function aluprofdiv() {
  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/mb_70_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5>Aluprof MB 70 HI</h5>
          <p className="gray f6 tl">
          Modernes Aluminiumsystem zur Ausführung von wärme- und schallgedämmten architektonischen Bauteilen in der Außenbebauung, wie z.B. Fenster, Türen, Windfänge, Schaufenster, 3D-Konstruktionen.
          </p>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/mb70.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/mb70.png"
          ></img>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-100 ba b--moon-gray ma2 pa3">
        <div className="w-100 w-50-l ma1 pa2">
          <img src="./pics/mb_86_3d.jpg"></img>
        </div>
        <div className="w-100 w-40-l ma1 pa2 tl">
          <h5>Aluprof MB 86 SI</h5>
          <p className="gray f6 tl">
          
          Die neue Fenster- und Türenserie MB-86 wurde entwickelt, um die zunehmend strengeren gesetzlichen Auflagen und die Nachfrage nach energiesparenderen Konstruktionen bei neuen Fenstern und Türen zu erfüllen.
          </p>
        </div>

        <div className="w-100 w-50-l ma1 pa2">
          <video width="100%" controls>
            <source src="./movies/mb86.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-100 w-40-l ma1 pa2">
          <img
            style={{ maxWidth: 350, maxHeight: 350 }}
            src="./pics/sections/mb86.png"
          ></img>
        </div>
      </div>

    </div>
  );
}

export default aluprofdiv;
