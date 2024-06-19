import SplitWithTwoImg from "../../components/ui/SplitWithTwoImg";
import { splitWithTwoImgData } from "../../constants/gourmetNotebook";

export default function GourmetNotebook() {
  return (
    <section id="gourmet_notebook" className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-neutral font-aileron">
        Le Carnet Gourmand
      </h1>
      <p className="mt-8 text-neutral font-lovelace text-lg">
        <strong>Le Carnet Gourmand</strong> est un espace d&eacute;di&eacute;
        &agrave; la d&eacute;couverte de nouvelles saveurs, de nouvelles
        recettes et de nouvelles histoires.
        <br />
        Vous y trouverez les sp&eacute;cialit&eacute;s culinaires de certains
        pays d&apos;Europe, en esp&eacute;rant que cela vous donnera envie de
        voyager et de d&eacute;couvrir de nouvelles cultures.
        <br />
        Que vous soyez un amateur de cuisine ou un passionn&eacute; de
        gastronomie, <strong>Le Carnet Gourmand</strong> est fait pour vous !
      </p>
      {splitWithTwoImgData.map((data, index) => (
        <SplitWithTwoImg
          key={index}
          title={<span dangerouslySetInnerHTML={{ __html: data.title }} />}
          imagesPosition={data.imagesPosition}
          images={data.images}
        >
          <p dangerouslySetInnerHTML={{ __html: data.content }} />
        </SplitWithTwoImg>
      ))}
    </section>
  );
}
