import { Fragment } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";

import HeaderDiv from "../../components/ui/headerdiv";
import KunststoffHaustuerenLandingSection from "../../components/KunststoffHaustuerenLandingSection";
import HaustuerenModelsGrid from "../../components/HaustuerenModelsGrid";

function KunststoffHaustuerenPage({ models }) {
  return (
    <Fragment>
      <Head>
        <title>Kunststoff Haustüren aus Polen – Modelle, Farben & Preise</title>
        <meta
          name="description"
          content="Kunststoff Haustüren aus Polen – moderne Modelle, viele Farben, Maßanfertigung und attraktive Preise."
        />
        <link
          rel="canonical"
          href="https://www.polnische-fenster.com/products/kunststoff-haustueren"
        />

        <meta
          property="og:title"
          content="Kunststoff Haustüren aus Polen – Modelle & Preise"
        />
        <meta
          property="og:description"
          content="Große Modellvielfalt, Maßanfertigung und moderne Kunststoff Haustüren aus Polen."
        />
        <meta
          property="og:url"
          content="https://www.polnische-fenster.com/products/kunststoff-haustueren"
        />
        <meta property="og:type" content="product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderDiv
        title="Kunststoff Haustüren aus Polen"
        subtitle="Unschlagbare Preise und Modellvielfalt"
      />

      <KunststoffHaustuerenLandingSection minPriceText="ab 1.129 € inkl. MwSt" />

      <HaustuerenModelsGrid initialCount={12} models={models} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public", "ekoline");

  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    console.error("Fehler beim Lesen von /public/ekoline:", err);
  }

  const jpgFiles = files.filter((file) => /\.(jpe?g)$/i.test(file));

  const models = jpgFiles
    .map((file) => {
      const match = file.match(/^(\d{2,3})(-2)?\.(jpg|jpeg)$/i);
      if (!match) return null;

      const baseId = match[1];
      const hasSteelFrame = Boolean(match[2]);

      return {
        id: hasSteelFrame ? `${baseId}-2` : baseId,
        baseId,
        name: `Modell ${baseId}${hasSteelFrame ? " mit Edelstahlrahmen" : ""}`,
        variantLabel: hasSteelFrame ? "mit Edelstahlrahmen" : null,
        src: `/ekoline/${file}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aNum = parseInt(a.baseId, 10);
      const bNum = parseInt(b.baseId, 10);

      if (aNum !== bNum) return aNum - bNum;

      const aVariant = a.id.includes("-2") ? 1 : 0;
      const bVariant = b.id.includes("-2") ? 1 : 0;
      return aVariant - bVariant;
    });

  return {
    props: {
      models,
    },
  };
}

export default KunststoffHaustuerenPage;