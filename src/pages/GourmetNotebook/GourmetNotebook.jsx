import SplitWithTwoImg from "../../components/ui/SplitWithTwoImg";

export default function GourmetNotebook() {
  return (
    <section id="gourmet_notebook" className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-neutral font-aileron">
        Le Carnet Gourmand
      </h1>
      <p className="mt-8 text-neutral font-lovelace text-lg">
        <strong>Le Carnet Gourmand</strong> est un espace dédi&eacute; &agrave;
        la d&eacute;couverte de nouvelles saveurs, de nouvelles recettes et de
        nouvelles histoires.
        <br />
        Vous y trouverez les sp&eacute;cialit&eacute;s culinaires de certains
        pays d&apos;Europe, en esp&eacute;rant que cela vous donnera envie de
        voyager et de d&eacute;couvrir de nouvelles cultures.
        <br />
        Que vous soyez un amateur de cuisine ou un passionn&eacute; de
        gastronomie, <strong>Le Carnet Gourmand</strong> est fait pour vous !
      </p>
      <SplitWithTwoImg
        title={<span>D&eacute;couvrez les saveurs de la <strong>France</strong></span>}
        imagesPosition="left"
        images={[
          {
            img: "https://images.unsplash.com/photo-1652172600474-32937eefee09?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Croissants",
          },
          {
            img: "https://www.sofoodmag.fr/wp-content/uploads/2024/01/Boeuf-bourguignon.png",
            alt: "Boeuf Bourguignon",
          },
        ]}
      >
        <p>
        La France est un pays riche en traditions culinaires et en produits du
        terroir. D&eacute;couvrez les recettes embl&eacute;matiques de la
        cuisine fran&ccedil;aise et les secrets des grands chefs.
        <br />
        Croissants, boeuf bourguignon, tarte tatin... Laissez-vous tenter par
        une balade gourmande &agrave; travers les r&eacute;gions de France.
        </p>
      </SplitWithTwoImg>
      <SplitWithTwoImg
        title={<span>D&eacute;couvrez les saveurs de l&apos;<strong>Italie</strong></span>}
        imagesPosition="right"
        images={[
          {
            img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Pizza",
          },
          {
            img: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Pasta",
          },
        ]}
      >
        <p>
          L&apos;Italie est le pays de la dolce vita et de la bonne cuisine.
          D&eacute;couvrez les secrets de la pasta, de la pizza et des
          antipasti.
          <br />
          Lasagnes, risotto, tiramisu... Plongez dans l&apos;univers de la
          cuisine italienne et laissez-vous envo&ucirc;ter par ses saveurs
          ensoleill&eacute;es.
        </p>
      </SplitWithTwoImg>
    </section>
  );
}
