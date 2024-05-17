import Section from "../../components/ui/Section";

export default function HowItsWorks() {
  return (
    <>
      <section id="team" className="max-w-screen mt-10">
        <h1 className="text-6xl font-aileron font-bold text-neutral text-center">
          Comment ça marche ?
        </h1>
        <p className="text-center text-xl text-neutral py-6 font-lovelace">
          Découvrez les visages derrière notre entreprise
        </p>
      </section>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Section 
          title="Choisissez" 
          description="Un voyage sur mesure selon vos envies (pays, itinéraire, hébergement, durée...)" 
        />
        <Section 
          title="Construisez" 
          description="Un séjour à votre image (activités, dégustations, planning...)" 
        />
        <Section 
          title="Validez" 
          description="Assurez-vous que tout vous convient" 
        />
        <Section 
          title="Réservez" 
          description="Vous-même ou laissez-nous faire (billets, hôtel...)" 
        />
        <Section 
          title="C'est parti !" 
          description="Profitez de votre voyage culinaire avec notre accompagnement 24h/24h durant tout votre séjour" 
        />
        <Section 
          title="Partagez" 
          description="Votre expérience, vos découvertes culinaires, vos souhaits d'amélioration, en un mot : votre aventure !" 
        />
      </main>
    </>
  );
}
