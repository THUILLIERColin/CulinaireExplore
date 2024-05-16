import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoInformationCircleOutline, IoWarningOutline
} from "react-icons/io5";


AlertModal.propTypes = {
  id: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  description: PropTypes.string.isRequired,
};

export default function AlertModal({ id, state="info", description }) {
  let className;
  let Icon;
  switch (state) {
    case "success":
      className = "alert-success";
      Icon = IoCheckmarkCircleOutline;
      break;
    case "error":
      Icon = IoCloseCircleOutline;
      className = "alert-error";
      break;
    case "warning":
      Icon = IoWarningOutline
      className = "alert-warning";
      break;
    default:
      Icon = IoInformationCircleOutline;
      className = "alert-info";
  }

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <div role="alert" className={`alert ${className}`}>
          <Icon className="shrink-0 h-6 w-6" />
          <span>{description}</span>
        </div>
      </div>
    </dialog>
  );
}
