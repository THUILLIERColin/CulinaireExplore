import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Bento from "../components/Bento";
import Hero from "../components/Hero";
import EngagementsPage from "../components/EngagementsPage";

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

        <Bento dataAos="fade-up" />
      </section>
      <EngagementsPage />
    </main>
  );
}
