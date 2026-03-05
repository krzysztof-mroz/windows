import Link from "next/link";

export default function DankePage() {
  return (
    <section className="wrap">
      <div className="card">
        <h1 className="title">Vielen Dank für Ihre Anfrage!</h1>

        <p className="text">
          Ihre Anfrage wurde erfolgreich gesendet.  
          Wir melden uns in der Regel innerhalb von <strong>24 Stunden</strong>.
        </p>

        <p className="text">
          Wenn Sie noch Fragen haben, können Sie uns jederzeit kontaktieren.
        </p>

        <Link href="/products/k70nt" className="btn">
          Zurück zum Produkt
        </Link>
      </div>

      <style jsx>{`
        .wrap {
          max-width: 700px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .card {
          background: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
        }

        .title {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .text {
          font-size: 16px;
          color: #444;
          margin-bottom: 16px;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 26px;
          background: #f97316;
          color: #fff;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: 0.2s;
        }

        .btn:hover {
          background: #ea580c;
        }
      `}</style>
    </section>
  );
}