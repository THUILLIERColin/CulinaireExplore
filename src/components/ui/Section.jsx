import PropTypes from "prop-types";
import { FaArrowAltCircleDown } from "react-icons/fa"; 

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default function Section({ title, description }) {
  return (
    <section className="text-center">
      <div className="p-6 bg-base-200 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold font-aileron text-neutral mb-4">{title}</h2>
      <p className="mb-4 text-xl text-neutral font-lovelace">{description}</p>
      </div>
      <FaArrowAltCircleDown className="text-5xl inline-block text-neutral my-4" />
    </section>
  );
}