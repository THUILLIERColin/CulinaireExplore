import PropTypes from "prop-types";
import TimelineStep from "./TimelineStep";

Timeline.propTypes = {
  title: PropTypes.string,
  introText: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default function Timeline({ title, introText, steps }) {
  return (
    <div className="py-12 px-8 bg-base-200 m-10 rounded-2xl shadow-inner">
      <h1 className="text-3xl font-semibold text-center mb-10">{title}</h1>
      <p className="text-center font-lovelace text-xl mb-10">{introText}</p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {steps.map((step, index) => (
          <>
            <TimelineStep
              number={step.number}
              title={step.title}
              description={step.description}
            />
            {index < steps.length - 1 && (
              <div className="w-full flex items-center justify-center my-5 lg:my-auto">
                <div className="h-1 flex-grow mx-2 dotted"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
