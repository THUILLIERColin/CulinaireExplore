import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Bento from "../../components/ui/Bento";
import Hero from "./Hero";
import EngagementItem from "../../components/ui/EngagementItem";

import OurTeam from "../../assets/img/bento_our-team.png";
import IWantToTravel from "../../assets/img/bento_i-want-to-travel.jpeg";
import HowItWorks from "../../assets/img/bento_how-it-works.png";

import { FaRegEye, FaClipboardList, FaDollarSign, FaSuitcaseRolling, FaUmbrella, FaBook, FaHeadset } from 'react-icons/fa';

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

const bento = [
  {
    id: 1,
    title: "Je veux voyager",
    img: IWantToTravel,
    alt: "I want to travel",
    link: "/i-want-to-travel",
  },
  {
    id: 2,
    title: "Notre équipe",
    img: OurTeam,
    alt: "Our team",
    link: "/team",
  },
  {
    id: 3,
    title: "Comment ça marche ?",
    img: HowItWorks,
    alt: "How it works",
    link: "/how-it-works",
  },
];

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }
  , []);
  return (
    <main>
      <Hero />
      <section id="about_us"
       className="py-16 px-3 bg-base-200">
        <h1
        data-aos="fade-up" 
        className="text-4xl text-center font-aileron font-bold text-neutral">
          Chez Culinaire Explore...
        </h1>
        <p data-aos="fade-up" className="my-4 px-10 text-xl text-center text-neutral font-lovelace">
          Découvrez des voyages uniques où <strong>gourmandise</strong> et{" "}
          <strong>curiosité</strong> se mêlent à la découverte culturelle.{" "}
          <br />
          Chez Culinaire Explore, nous vous offrons des{" "}
          <strong>expériences culinaires authentiques</strong>, en voyage{" "}
          <strong>sur mesure</strong> ou en petit groupe. <br />
          Spécialistes des <u>voyages culinaires en Europe</u>, nous vous
          invitons à savourer le monde à travers ses saveurs locales.
        </p>

        <Bento dataAos="fade-up" bento={bento} />
      </section>
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
    </main>
  );
}
