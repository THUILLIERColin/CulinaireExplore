import PropTypes from "prop-types";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  Icon: PropTypes.elementType,
};

export default function Section({ title, description, Icon }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="text-center">
      <div className="p-6 bg-base-200 shadow-lg rounded-lg" data-aos="fade-up">
        <h2 className="text-4xl font-bold font-aileron text-neutral mb-4">
          {title}
        </h2>
        <p className="mb-4 text-xl text-neutral font-lovelace">{description}</p>
      </div>
      {/* Si Icon est défini, on l'affiche */}
      {Icon && (
        <div data-aos="fade-up">
          <Icon className="text-5xl inline-block text-neutral my-4" />
        </div>
      )}
    </section>
  );
}
