import PropTypes from "prop-types";

TimelineStep.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default function TimelineStep({ number, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold">
        {number}
      </div>
      <h2 className="text-lg font-bold font-aileron mt-4">{title}</h2>
      <p className="text-center font-lovelace mt-2">{description}</p>
    </div>
  );
}
