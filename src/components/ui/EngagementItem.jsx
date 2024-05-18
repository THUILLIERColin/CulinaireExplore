import PropTypes from "prop-types";

EngagementItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default function EngagementItem({ Icon, title, subTitle }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="icon mb-2">
        <Icon className="h-16 w-16 text-neutral" />
      </div>
      <h3 className="text-lg font-bold text-center text-neutral font-lovelace">{title}</h3>
      <p className="text-sm text-center text-neutral font-poppins">{subTitle}</p>
    </div>
  );
}
