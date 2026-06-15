import Link from "next/link";
import Head from "next/head";

export default function SchnellkontaktDankePage() {
  return (
    <section className="quickThanks">
      <Head>
        <title>Nachricht gesendet | Polnische-Fenster.com</title>
        <meta
          name="description"
          content="Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich."
        />
      </Head>

      <div className="quickThanksCard">
        <p className="eyebrow">Schnellkontakt</p>
        <h1>Vielen Dank, Ihre Nachricht ist angekommen.</h1>
        <p>
          Wir melden uns schnellstmöglich bei Ihnen. Wenn es besonders eilig ist,
          können Sie uns zusätzlich per WhatsApp schreiben.
        </p>
        <div className="quickThanksActions">
          <Link href="/" legacyBehavior>
            <a>Zur Startseite</a>
          </Link>
          <a
            href="https://wa.me/4915737448021"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            WhatsApp öffnen
          </a>
        </div>
      </div>

      <style jsx>{`
        .quickThanks {
          margin: 0 auto;
          max-width: 760px;
          padding: 72px 18px;
        }

        .quickThanksCard {
          background: #fff;
          border: 1px solid #eadfce;
          box-shadow: 0 18px 48px rgba(32, 28, 24, 0.12);
          padding: 34px 24px;
          text-align: center;
        }

        .eyebrow {
          color: #b86411;
          font-size: 13px;
          font-weight: 800;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        h1 {
          color: #171717;
          font-size: 32px;
          line-height: 1.14;
          margin: 0 auto 14px;
          max-width: 14ch;
        }

        p {
          color: #555;
          font-size: 16px;
          line-height: 1.55;
          margin: 0 auto;
          max-width: 560px;
        }

        .quickThanksActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 26px;
        }

        .quickThanksActions a {
          background: #171717;
          color: #fff;
          font-weight: 800;
          padding: 13px 18px;
          text-decoration: none;
        }

        .quickThanksActions a.secondary {
          background: #25d366;
          color: #0f2d19;
        }

        @media (min-width: 640px) {
          .quickThanksCard {
            padding: 46px 36px;
          }

          h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}
