import PropTypes from "prop-types";

NumberPicker.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function NumberPicker({ label, value, onChange }) {
  const increment = () => {
    value += 1;
    onChange(value);
  };

  const decrement = () => {
    value -= 1;
    if (value < 0) {
      value = 0;
    }
    onChange(value);
  };

  return (
    <div>
      <label className="block mb-2 font-poppins">{label}</label>
      <div className="flex items-center">
        <button
          type="button"
          className="btn btn-square btn-outline"
          onClick={decrement}
          disabled={value <= 0}
        >
          -
        </button>
        <input
          type="text"
          className="input input-bordered w-16 text-center"
          readOnly
          value={value}
        />
        <button
          type="button"
          className="btn btn-square btn-outline"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
