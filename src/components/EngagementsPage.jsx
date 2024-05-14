import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import EngagementItem from './EngagementItem';
import { FaRegEye, FaClipboardList, FaDollarSign, FaSuitcaseRolling, FaUmbrella, FaBook, FaHeadset } from 'react-icons/fa';

export default function EngagementsPage() {
  const engagements = [
    {
      Icon: FaRegEye,
      title: "L’expertise",
      subTitle: "Quelle que soit la destination, vous avez l’assurance de bénéficier de l’expertise d’un spécialiste qui aura à cœur de partager ses connaissances du terrain pour organiser votre voyage.",
    },
    {
      Icon: FaClipboardList,
      title: "Le sur-mesure",
      subTitle: "Votre créateur de voyage prend un soin tout particulier à vous écouter pour définir votre projet et personnaliser votre voyage suivant vos souhaits et vos envies.",
    },
    {
      Icon: FaDollarSign,
      title: "Les prix",
      subTitle: "Les prix de nos voyages sont tous étudiés au plus juste. Nous les vendons en direct et pratiquons des niveaux de marge modérés.",
    },
    {
      Icon: FaSuitcaseRolling,
      title: "Des voyages tout compris",
      subTitle: "Pas de mauvaises surprises : nos prix détaillent très clairement les prestations qui vous sont proposées et incluent toutes les taxes et les frais de dossiers éventuels.",
    },
    {
      Icon: FaUmbrella,
      title: "La garantie financière",
      subTitle: "Vous partez en toute tranquillité puisque vous bénéficiez de la garantie financière APST des Tour-Opérateurs français.",
    },
    {
      Icon: FaBook,
      title: "Le carnet de voyage",
      subTitle: "Avant votre départ, nous vous remettons votre carnet de voyage personnalisé : il détaille l’ensemble de votre programme.",
    },
    {
      Icon: FaHeadset,
      title: "L’assistance 24/24",
      subTitle: "Pendant tout votre séjour, vous bénéficiez d’une assistance 24 heures sur 24 en France comme à destination.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 px-10">
      <h2 className="text-center text-2xl font-bold mb-10 font-aileron text-neutral">
        Pourquoi choisir Culinaire Explore ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {engagements.map((engagement, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <EngagementItem
              Icon={engagement.Icon}
              title={engagement.title}
              subTitle={engagement.subTitle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
