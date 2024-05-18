import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Bento from "../../components/ui/Bento";
import Hero from "./Hero";
import EngagementItem from "../../components/ui/EngagementItem";

import { bento } from "../../constants/bento";
import { engagements } from "../../constants/engagements";

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
