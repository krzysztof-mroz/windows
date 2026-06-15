import Schnellkontakt from "./schnellkontakt";

function description() {
  return (
    <section className="descriptionContactWrap">
      <Schnellkontakt />

      <style jsx>{`
        .descriptionContactWrap {
          margin: 22px auto;
          max-width: 1120px;
          padding: 0 12px;
          width: 100%;
        }

        @media (min-width: 760px) {
          .descriptionContactWrap {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default description;
