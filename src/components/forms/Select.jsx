import PropTypes from "prop-types";

Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

export default function Select({ label, options, placeholder, value, onChange }) {
  return (
    <label className="form-control w-full max-w-lg">
      <div className="block mb-2">
        {label}
      </div>
      <select className="select select-bordered" value={value} onChange={onChange}>
        <option disabled value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
