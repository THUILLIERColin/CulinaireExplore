import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Bento from "../../components/ui/Bento";
import Hero from "./Hero";
import EngagementItem from "../../components/ui/EngagementItem";
import { bento } from "../../constants/bento";
import { engagements } from "../../constants/engagements";
import { Link } from "react-router-dom";
import SignUpSection from "../../components/ui/SignUpSection";
import PartnersSection from "./PartnersSection";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about_us" className="py-16 px-3 bg-base-200">
        <h1 data-aos="fade-up" className="text-4xl text-center font-aileron font-bold text-neutral">
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
      <section id="engagements" className="py-20 px-10">
        <h2 className="text-center text-2xl font-bold mb-10 font-aileron text-neutral">
          Pourquoi choisir Culinaire Explore ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.slice(0, -1).map((engagement, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <EngagementItem
                Icon={engagement.Icon}
                title={engagement.title}
                subTitle={engagement.subTitle}
              />
            </div>
          ))}
          <Link to={engagements[engagements.length - 1].link} key="last-engagement">
            <div data-aos="fade-up" data-aos-delay={(engagements.length - 1) * 100}>
              <EngagementItem
                Icon={engagements[engagements.length - 1].Icon}
                title={engagements[engagements.length - 1].title}
                subTitle={engagements[engagements.length - 1].subTitle}
              />
            </div>
          </Link>
        </div>
      </section>
      <section id="signup" className="bg-base-200 py-12 px-4" data-aos="fade-up">
        <SignUpSection />
      </section>
      <section id="partners" className="bg-base py-12 px-4" data-aos="fade-up">
        <PartnersSection />
      </section>
    </main>
  );
}
