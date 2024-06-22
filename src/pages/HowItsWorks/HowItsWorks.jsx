import Section from "../../components/ui/Section";
import { FaArrowAltCircleDown } from "react-icons/fa"; 

export default function HowItsWorks() {
  return (
    <>
      <section id="team" className="max-w-screen mt-10">
        <h1 className="text-6xl font-aileron font-bold text-neutral text-center">
          Comment ça marche ?
        </h1>
        <p className="text-center text-xl text-neutral py-6 font-lovelace">
          Découvrez comment nous vous accompagnons dans votre voyage culinaire
        </p>
      </section>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Section 
          title="Choisissez" 
          description="Un voyage sur mesure selon vos envies (pays, itinéraire, hébergement, durée...)" 
          Icon={FaArrowAltCircleDown}
        />
        <Section 
          title="Construisez" 
          description="Un séjour à votre image (activités, dégustations, planning...)" 
          Icon={FaArrowAltCircleDown}
        />
        <Section 
          title="Validez" 
          description="Assurez-vous que cela vous convienne"
          Icon={FaArrowAltCircleDown}
        />
        <Section 
          title="Réservez" 
          description="Vous-même ou laissez-nous faire (billets, hôtel...)" 
          Icon={FaArrowAltCircleDown}
        />
        <Section 
          title="C'est parti !" 
          description="Profitez de votre voyage culinaire avec notre accompagnement 24h/24h durant tout votre séjour" 
          Icon={FaArrowAltCircleDown}
        />
        <Section 
          title="Partagez" 
          description="Votre expérience, vos découvertes culinaires, vos souhaits d'amélioration, en un mot : votre aventure !" 
        />
      </main>
    </>
  );
}
