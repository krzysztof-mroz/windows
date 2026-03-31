import { Fragment } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";

import HeaderDiv from "../../components/ui/headerdiv";
import AluminiumHaustuerenLandingSection from "../../components/AluminiumHaustuerenLandingSection";
import AluHaustuerenModelsGrid from "../../components/AluHaustuerenModelsGrid";

function AluminiumHaustuerenPage({ models }) {
  return (
    <Fragment>
      <Head>
        <title>Aluminium Haustüren aus Polen – moderne Modelle nach Maß</title>
        <meta
          name="description"
          content="Aluminium Haustüren aus Polen – moderne Modelle nach Maß, starke Paneele, hochwertige Ausstattung und viele Designs."
        />
        <link
          rel="canonical"
          href="https://www.polnische-fenster.com/products/aluminium-haustueren"
        />
      </Head>

      <HeaderDiv
        headline="Aluminium Haustüren aus Polen"
        text="Moderne Aluminium Haustüren nach Maß – stabil, elegant und in vielen Modellen erhältlich."
      />

      <AluminiumHaustuerenLandingSection minPriceText="auf Anfrage" />

      <AluHaustuerenModelsGrid initialCount={12} models={models} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public", "despiro");

  let models = [];

  try {
    const files = fs
      .readdirSync(dir)
      .filter((file) => /^DP\d{2}\.jpg$/i.test(file))
      .sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)?.[0] || "0", 10);
        const bNum = parseInt(b.match(/\d+/)?.[0] || "0", 10);
        return aNum - bNum;
      });

    models = files.map((file) => {
      const baseId = file.replace(/\.jpg$/i, "");
      const displayId = baseId.replace(/^DP/i, "");

      return {
        id: baseId,
        baseId: displayId,
        name: `DP ${displayId}`,
        src: `/despiro/${file}`,
      };
    });
  } catch (error) {
    console.error("Fehler beim Lesen von /public/despiro:", error);
  }

  return {
    props: {
      models,
    },
  };
}

export default AluminiumHaustuerenPage;