import SplitScreen from "../../components/ui/SplitScreen";
import Valentine from "../../assets/img/pages/team/ValentineTHUILLIER.jpg";
import Rose from "../../assets/img/pages/team/RoseMANCHERON.jpg";
import { CiLinkedin } from "react-icons/ci";

export default function Team() {
  return (
    <>
      <section id="team" className="mx-28 max-w-screen mb-36 mt-10">
        <h1 className="text-6xl font-aileron font-bold text-neutral text-center">
          Notre &eacute;quipe de choc
        </h1>
        <p className="text-center text-xl text-neutral py-6 font-lovelace">
          D&eacute;couvrez les visages derri&egrave;re notre entreprise
        </p>
        <SplitScreen
          title="Valentine THUILLIER"
          sourceImage={Valentine}
          altImage="Profile picture of Valentine THUILLIER"
          imagePosition="left"
        >
          <div className="text-justify">
            <p className="pb-2">
              Bonjour cher(e)s voyageurs ! Je suis Valentine, une
              professionnelle diplôm&eacute;e en <strong>gestion de PME</strong>
              . &Agrave; 20 ans, j&apos;ai d&eacute;j&agrave; acquis une
              exp&eacute;rience pr&eacute;cieuse en tant que{" "}
              <strong>sapeur-pompier volontaire</strong>, o&ugrave; j&apos;ai
              appris l&apos;importance de{" "}
              <strong>l&apos;esprit d&apos;&eacute;quipe</strong>, de{" "}
              <strong>l&apos;entraide</strong> et de la{" "}
              <strong>r&eacute;solution de probl&egrave;mes sous pression.</strong>
            </p>
            <p className="pb-2">
              En dehors du travail, j&apos;aime passer mes dimanches &agrave;
              jouer en famille et cuisiner avec mon ch&eacute;ri. J&apos;ai
              &eacute;galement un compagnon f&eacute;lin, un adorable chat
              pr&eacute;nomm&eacute; Caramel et une tortue d&apos;eau
              appel&eacute; Franklin.
            </p>
            <p className="pb-2">
              Je crois fermement en{" "}
              <strong>l&apos;honnêtet&eacute;, la transparence</strong> et le{" "}
              <strong>travail acharn&eacute;</strong>, et je m&apos;efforce de
              les int&eacute;grer dans tous les aspects de ma vie
              professionnelle et personnelle.
            </p>
            <p className="pb-2">
              N&apos;h&eacute;sitez pas &agrave; me suivre sur{" "}
              <a
                href="https://www.linkedin.com/in/valentine-thuillier-623899264/"
                target="_blank"
                rel="noreferrer"
                className="font-bold italic"
              >
                <CiLinkedin className="inline-block" /> LinkedIn
              </a>{" "}
              pour en savoir plus sur mes exp&eacute;riences et mes projets
              professionnels. Je suis impatiente de collaborer avec vous et de
              contribuer au succ&egrave;s de notre entreprise !
            </p>
          </div>
        </SplitScreen>
        <SplitScreen
          title="Rose MANCHERON"
          sourceImage={Rose}
          altImage="Profile picture of Rose MANCHERON"
          imagePosition="right"
        >
          <div className="text-justify">
            <p className="pb-2">
              Bonjour &agrave; tous ! Je suis Rose, &acirc;g&eacute;e de 18
              ans, mon parcours atypique m&apos;a d&eacute;j&agrave; permis
              d&apos;acqu&eacute;rir des <strong>comp&eacute;tences</strong>{" "}
              pr&eacute;cieuses dans des <strong>domaines vari&eacute;s</strong>
              .
            </p>
            <p className="pb-2">
              Issue d&apos;une formation en <strong>gestion de PME</strong>,
              j&apos;ai appris l&apos;importance de la <strong>rigueur</strong>,
              de <strong>l&apos;organisation</strong> et de la{" "}
              <strong>pr&eacute;cision</strong>, des valeurs que je
              m&apos;efforce d&apos;appliquer au quotidien dans mes projets
              professionnels et personnels.
            </p>
            <p className="pb-2">
              Parall&egrave;lement &agrave; mon travail, je suis engag&eacute;e au sein
              d&apos;une <strong>troupe de th&eacute;&acirc;tre</strong> qui m&apos;a
              permis de d&eacute;velopper des qualit&eacute;s telles que{" "}
              <strong>l&apos;ouverture aux autres</strong>, la{" "}
              <strong>communication efficace</strong>{" "}
              et <strong>la gestion du stress</strong>. Mon temps libre est
              &eacute;galement d&eacute;di&eacute; &agrave; la cr&eacute;ation
              d’albums photos et &agrave; mes proches, avec qui je partage des
              moments pr&eacute;cieux et enrichissants.
            </p>
            <p className="pb-2">
              Si vous souhaitez en savoir plus sur mon parcours professionnel et
              mes projets futurs, je vous invite &agrave; me suivre sur{" "}
              <a
                href="https://www.linkedin.com/in/rose-mancheron-a4542227a/"
                target="_blank"
                rel="noreferrer"
                className="font-bold italic"
              >
                <CiLinkedin className="inline-block" /> LinkedIn
              </a>
              . C&apos;est avec enthousiasme que je fais partie de cette
              &eacute;quipe dynamique, et j&apos;ai h&acirc;te de contribuer &agrave;
              son succ&egrave;s !
            </p>
          </div>
        </SplitScreen>
      </section>
    </>
  );
}
