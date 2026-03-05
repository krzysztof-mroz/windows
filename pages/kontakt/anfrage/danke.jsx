import React, { useMemo } from "react";
import { useRouter } from "next/router";

export default function Danke() {
  const router = useRouter();
  const modell = useMemo(() => {
    const m = router.query.modell;
    return m ? String(m).padStart(2, "0") : "";
  }, [router.query.modell]);

  return (
    <section className="wrap">
      <div className="card">
        <h1 className="title">Vielen Dank!</h1>
        <p className="text">
          Ihre Anfrage{modell ? <> zum <b>Modell {modell}</b></> : null} wurde erfolgreich gesendet.
          Wir melden uns so schnell wie möglich.
        </p>

        <a className="btn" href="/products/k70nt">
          Zurück zu den Modellen
        </a>
      </div>

      <style jsx>{`
        .wrap { max-width: 900px; margin: 0 auto; padding: 40px 16px; }
        .card {
          border: 1px solid #e6e6e6;
          border-radius: 16px;
          background: #fff;
          padding: 18px;
          text-align: center;
        }
        .title { margin: 0; font-size: 30px; }
        .text { margin: 10px auto 0; color: #444; max-width: 60ch; }
        .btn {
          display: inline-block;
          margin-top: 14px;
          background: #0f2d44;
          color: #fff;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight: 700;
          text-decoration: none;
        }
        @media (min-width: 720px) {
          .wrap { padding: 60px 20px; }
          .title { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}