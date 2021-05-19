import "tachyons";

function StartPage() {
  return (
    <div>
      <div className="bg-black-50 tc fw9 pb2 pt2">Nav Bar</div>
      <div className="mh2 mh4-ns mh6-l">
        <div className="pa4 tc">Icons, logo, hotline</div>
        <div className="tc bg-black-20 pa6 br3">IMAGE</div>
        <div className="pv3 tl">
          <h2>Title</h2>
        </div>

        <div className="flex flex-wrap justify-center mb5 w-100">
          <div className="flex  fl w-100 w-third-l">
            <div className="ba flex justify-center w-100 fl bg-black-10 tc ma2 br3 h5">
              card
            </div>
          </div>
          <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb5 w-100">
          <div className="flex flex-wrap justify-around fl w-100 w-two-thirds-l">
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
            <div className="ba w-100 w-40-l fl bg-black-10 tc ma2 br3 h4">
              card
            </div>
          </div>
          <div className="flex justify-center fl w-100 w-third-l">
            <div className="ba w-100 fl bg-black-10 tc ma2 br3 h5">card</div>
          </div>
        </div>
        <div className="tc bg-black-10 pa6 br3">FOOTER</div>
      </div>
    </div>
  );
}

export default StartPage;
