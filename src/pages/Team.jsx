import SplitScreen from "../components/SplitScreen";
import Valentine from "../assets/img/ValentineTHUILLIER.jpg";
import Rose from "../assets/img/RoseMANCHERON.jpg";
import Timeline from "../components/Timeline";

export default function Team() {
  return (
    <>
      <section id="team" className="mx-28 max-w-screen mb-36">
        <h1 className="text-4xl font-aileron font-bold text-center text-error">
          Notre équipe de choc
        </h1>
        <p className="text-center text-lg py-6 font-lovelace text-error">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod
        </p>
        <SplitScreen
          title="Valentine THUILLIER"
          sourceImage={Valentine}
          altImage="Profile picture of Valentine THUILLIER"
          imagePosition="left"
        >
          <div className="text-error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quas minima dignissimos veniam consequatur at saepe nostrum vero,
          culpa laudantium ducimus maxime sequi odio adipisci dicta quam,
          eveniet tempora dolorum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Fuga, quibusdam. Consectetur facere esse, eum
          dolores aperiam beatae laborum eligendi cum quasi magnam accusantium,
          in placeat quod voluptate iure quas! Ipsam?
          </div>
        </SplitScreen>
        <SplitScreen
          title="Rose MANCHERON"
          sourceImage={Rose}
          altImage="Profile picture of Rose MANCHERON"
          imagePosition="right"
        >
          <div className="text-error">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iure
          harum iusto ex earum cumque dignissimos illo, molestiae debitis omnis
          quis! Dicta adipisci aspernatur vero deserunt, enim quae inventore
          sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          doloribus, voluptate voluptatibus praesentium aperiam pariatur veniam,
          excepturi at hic inventore similique vel sint consequuntur dolor
          tenetur non quisquam perferendis repellat.
          </div>
        </SplitScreen>
      </section>
      <section id="timeline" className="text-error">
        <Timeline
          title="Titre de la timeline"
          introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          steps={[
            {
              number: "1",
              title: "Étape 1",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              number: "2",
              title: "Étape 2",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              number: "3",
              title: "Étape 3",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ]}
        />
      </section>
    </>
  );
}
