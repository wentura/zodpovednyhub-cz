// import VypisAkci from "@/components/vypisAkci";
import Adresa from "@/components/adresa";
import Head from "next/head";
// import Image from "next/image";
// import Script from "next/script";
// import { getAllActions } from "../../lib/akceNahled";
// import Actions from "../components/actions";
// import Carousel from "../components/carousel";
// import Clanky from "../components/clanky";

// export async function getStaticProps() {
//   const allActions = await getAllActions();
//   return {
//     props: {
//       allActions: allActions,
//     },
//     revalidate: 10,
//   };
// }

export default function Home({ allActions }) {
  return (
    <>
      <Head>
        <title>Zodpovědný hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Zodpovědný hub" />
        <meta
          name="description"
          content="Hub je tu pro vás jako místo, kde se můžete od někoho dalšího dozvědět něco nového. Kde můžete ostatní obohatit o něco, co zase umíte dobře vy. A také kde si můžete vyzkoušet s dětmi hry a materiály od zodpovědné výuky."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zodpovednyhub.cz/" />
        <meta property="og:title" content="Zodpovědný hub" />
        <meta
          property="og:description"
          content="Hub je tu pro vás jako místo, kde se můžete od někoho dalšího dozvědět něco nového. Kde můžete ostatní obohatit o něco, co zase umíte dobře vy. A také kde si můžete vyzkoušet s dětmi hry a materiály od zodpovědné výuky."
        />
        <meta property="og:image" content="/og.jpg" />
      </Head>
      <div className="container max-w-[800px] mx-auto bg-white my-12">
        <div className="mx-4 md:mx-2">
          <h2 className="nadpis text-2xl md:text-5xl font-extrabold text-center">
            SHOWROOM
          </h2>
          <p className="py-4">
            Zodpovědná výuka je obchod, jenž nabízí řešení učitelům a rodičům,
            kteří chtějí čas s dětmi využít smysluplně a radostně. Nabízí
            výukové hry a materiály pro děti prvního stupně ZŠ. V showroomu si
            můžete vyzvednou hry z našeho eshopu www.zodpovednavyuka.cz
          </p>
          <p className="py-4">
            Kdo si hraje, učí se. To je hlavní myšlenka našeho projektu.
          </p>
          <p className="py-4">
            U malých školkových dětí respektujeme fakt, že se učí nápodobou a
            hrou. Ale co škola? Ve škole se stává, že se hra vytratí a začne
            povinnost a dril. A to, pokud je načasováno na nezralou dětskou
            hlavu, tak může mít spíše negativní výsledky. „Nejde mi to, neumím
            to, nemám na to hlavu.“ Pokud je látka příliš těžká. ... Když dítě
            zažívá úspěch, je to pro něj motor jít kupředu, chtít poznávat nové
            věci a hloubat nad nimi. Učení ho baví. A díky tomu roste.
          </p>
          <p className="py-4">
            V zodpovědné výuce si můžete vybírat. A můžete cílit právě na
            oblasti, které jsou pro děti výzvou, ale zároveň při jejich řešení
            zažijí úspěch. Při tvorbě je kladen důraz buď na pozitivní emoce při
            hře v případě skupinových her. U materiálů pro individuální práci je
            kladen důraz na osobní zodpovědnost za své vzdělání. Kartičky ma
            Všichni víme, že silný zážitek setrvává v naší paměti daleko
            snadněji než něco, co je nuda a o ničem.
          </p>
          <p className="py-4">
            Každé dítě má právo na to zažívat při učení úspěch. Hry a materiály
            od zodpovědné výuky mohou být pomocnou rukou, kterou můžete pro tuto
            příležitost využít.
          </p>
          <p className="py-4">Přijďte si popovídat a poradit se</p>
        </div>
        <div className="pt-12">
          <Adresa />
        </div>
      </div>
    </>
  );
}
