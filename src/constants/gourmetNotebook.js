import croissant from "../assets/img/pages/gourmetNotbook/croissants.avif";
import boeufBourguignon from "../assets/img/pages/gourmetNotbook/boeufBourguignon.png";
import pizza from "../assets/img/pages/gourmetNotbook/margarita.avif";
import pasta from "../assets/img/pages/gourmetNotbook/carbonara.avif";
import paella from "../assets/img/pages/gourmetNotbook/paella.avif";
import tapas from "../assets/img/pages/gourmetNotbook/tapas.avif";
import currywurst from "../assets/img/pages/gourmetNotbook/currywurst.avif";
import bretzel from "../assets/img/pages/gourmetNotbook/bretzel.avif";
import fishAndChips from "../assets/img/pages/gourmetNotbook/fishAndChips.avif";
import scones from "../assets/img/pages/gourmetNotbook/scones.avif";
import moussaka from "../assets/img/pages/gourmetNotbook/moussaka.jpeg";
import gyros from "../assets/img/pages/gourmetNotbook/gyros.webp";
import bacalhau from "../assets/img/pages/gourmetNotbook/bacalhau.jpeg";
import pastelDeNata from "../assets/img/pages/gourmetNotbook/pastelDeNata.jpeg";
import kottbullar from "../assets/img/pages/gourmetNotbook/kottbullar.avif";
import smorgasbord from "../assets/img/pages/gourmetNotbook/smorgasbord.jpeg";
import pierogi from "../assets/img/pages/gourmetNotbook/pierogi.avif";
import bigos from "../assets/img/pages/gourmetNotbook/bigos.jpeg";
import borscht from "../assets/img/pages/gourmetNotbook/borscht.jpeg";
import pelmeni from "../assets/img/pages/gourmetNotbook/pelmeni.webp";

export const images = {
  croissant,
  boeufBourguignon,
  pizza,
  pasta,
  paella,
  tapas,
  currywurst,
  bretzel,
  fishAndChips,
  scones,
  moussaka,
  gyros,
  bacalhau,
  pastelDeNata,
  kottbullar,
  smorgasbord,
  pierogi,
  bigos,
  borscht,
  pelmeni,
};

export const splitWithTwoImgData = [
  {
    title: "D&eacute;couvrez les saveurs de la <strong>France</strong>",
    imagesPosition: "left",
    images: [
      { img: images.croissant, alt: "Croissants" },
      { img: images.boeufBourguignon, alt: "Boeuf Bourguignon" },
    ],
    content: `
      La France est un pays riche en traditions culinaires et en produits du
      terroir. D&eacute;couvrez les recettes embl&eacute;matiques de la
      cuisine fran&ccedil;aise et les secrets des grands chefs.
      <br />
      Croissants, boeuf bourguignon, tarte tatin... Laissez-vous tenter par
      une balade gourmande &agrave; travers les r&eacute;gions de France.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de l&apos;<strong>Italie</strong>",
    imagesPosition: "right",
    images: [
      { img: images.pizza, alt: "Pizza" },
      { img: images.pasta, alt: "Pasta" },
    ],
    content: `
      L&apos;Italie est le pays de la dolce vita et de la bonne cuisine.
      D&eacute;couvrez les secrets de la pasta, de la pizza et des
      antipasti.
      <br />
      Lasagnes, risotto, tiramisu... Plongez dans l&apos;univers de la
      cuisine italienne et laissez-vous envo&ucirc;ter par ses saveurs
      ensoleill&eacute;es.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de l&apos;<strong>Espagne</strong>",
    imagesPosition: "left",
    images: [
      { img: images.paella, alt: "Paella" },
      { img: images.tapas, alt: "Tapas" },
    ],
    content: `
      L&apos;Espagne est c&eacute;l&egrave;bre pour sa cuisine vibrante et color&eacute;e,
      influenc&eacute;e par des si&egrave;cles de culture et de traditions. D&eacute;couvrez
      les saveurs authentiques de la paella et des tapas, v&eacute;ritables
      symboles de la gastronomie espagnole.
      <br />
      Que ce soit la paella riche en fruits de mer ou les tapas vari&eacute;es &agrave;
      partager, laissez-vous s&eacute;duire par la convivialit&eacute; et la richesse de
      la cuisine espagnole.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de l&apos;<strong>Allemagne</strong>",
    imagesPosition: "right",
    images: [
      { img: images.currywurst, alt: "Currywurst" },
      { img: images.bretzel, alt: "Bretzel" },
    ],
    content: `
      L&apos;Allemagne offre une cuisine robuste et r&eacute;confortante, ancr&eacute;e dans
      ses traditions. D&eacute;couvrez les plats embl&eacute;matiques comme le
      currywurst et les bretzels, qui raviront les amateurs de saveurs
      authentiques.
      <br />
      Profitez d&apos;un currywurst &eacute;pic&eacute; ou d&apos;un pretzel moelleux et sal&eacute; pour
      une exp&eacute;rience culinaire unique et savoureuse.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs du <strong>Royaume-Uni</strong>",
    imagesPosition: "left",
    images: [
      { img: images.fishAndChips, alt: "Fish and Chips" },
      { img: images.scones, alt: "Scones" },
    ],
    content: `
      Le Royaume-Uni est r&eacute;put&eacute; pour ses plats r&eacute;confortants et
      traditionnels. D&eacute;gustez le c&eacute;l&egrave;bre fish and chips ou savourez des
      scones avec de la cr&egrave;me et de la confiture.
      <br />
      Que ce soit pour un repas copieux ou un tea-time raffin&eacute;,
      laissez-vous tenter par la richesse de la cuisine britannique.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de la <strong>Gr&egrave;ce</strong>",
    imagesPosition: "right",
    images: [
      { img: images.moussaka, alt: "Moussaka" },
      { img: images.gyros, alt: "Gyros" },
    ],
    content: `
      La Gr&egrave;ce est le berceau de saveurs m&eacute;diterran&eacute;ennes riches et
      vari&eacute;es. D&eacute;couvrez les d&eacute;lices de la moussaka et des gyros, des
      plats embl&eacute;matiques de la cuisine grecque.
      <br />
      Plongez dans l&apos;univers ensoleill&eacute; de la Gr&egrave;ce avec des plats qui
      allient fra&icirc;cheur et tradition, parfaits pour toute occasion.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs du <strong>Portugal</strong>",
    imagesPosition: "left",
    images: [
      { img: images.bacalhau, alt: "Bacalhau &agrave; Brás" },
      { img: images.pastelDeNata, alt: "Pastel de Nata" },
    ],
    content: `
      Le Portugal est connu pour ses plats de poisson et ses p&acirc;tisseries
      d&eacute;licieuses. D&eacute;gustez le bacalhau &agrave; Brás ou savourez un pastel de
      nata, embl&egrave;mes de la cuisine portugaise.
      <br />
      Que ce soit pour un repas familial ou une pause gourmande,
      laissez-vous envo&ucirc;ter par les saveurs uniques du Portugal.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de la <strong>Su&egrave;de</strong>",
    imagesPosition: "right",
    images: [
      { img: images.kottbullar, alt: "K&ouml;ttbullar" },
      { img: images.smorgasbord, alt: "Sm&ouml;rgåsbord" },
    ],
    content: `
      La Su&egrave;de propose une cuisine simple et d&eacute;licieuse, id&eacute;ale pour tous
      les gourmands. D&eacute;couvrez les c&eacute;l&egrave;bres k&ouml;ttbullar et le sm&ouml;rg&aring;sbord,
      des incontournables de la table su&eacute;doise.
      <br />
      Plongez dans la convivialit&eacute; et les traditions su&eacute;doises avec ces
      plats savoureux qui sauront vous r&eacute;chauffer le c&oelig;ur.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de la <strong>Pologne</strong>",
    imagesPosition: "left",
    images: [
      { img: images.pierogi, alt: "Pierogi" },
      { img: images.bigos, alt: "Bigos" },
    ],
    content: `
      La Pologne offre une cuisine riche et r&eacute;confortante, parfaite pour
      les amateurs de plats copieux. Go&ucirc;tez aux pierogi et au bigos, des
      plats traditionnels qui vous feront d&eacute;couvrir les saveurs
      authentiques de la Pologne.
      <br />
      Que ce soit pour un repas en famille ou entre amis, laissez-vous
      s&eacute;duire par la g&eacute;n&eacute;rosit&eacute; de la cuisine polonaise.
    `,
  },
  {
    title: "D&eacute;couvrez les saveurs de la <strong>Russie</strong>",
    imagesPosition: "right",
    images: [
      { img: images.borscht, alt: "Borscht" },
      { img: images.pelmeni, alt: "Pelmeni" },
    ],
    content: `
      La Russie est une terre de traditions culinaires riches et vari&eacute;es.
      D&eacute;couvrez les saveurs du borscht et des pelmeni, des plats
      embl&eacute;matiques de la cuisine russe.
      <br />
      Profitez d&apos;un voyage culinaire &agrave; travers la Russie avec ces plats
      qui allient chaleur et tradition, parfaits pour toutes les
      occasions.
    `,
  },
];
