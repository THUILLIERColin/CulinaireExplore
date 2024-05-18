import PropTypes from "prop-types";
import {  useState } from "react";

SplitScreen.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
  altImage: PropTypes.string,
  children: PropTypes.node,
  imagePosition: PropTypes.oneOf(["left", "right"]), // Ajout de la prop imagePosition
};

export default function SplitScreen({
  title,
  sourceImage,
  altImage,
  children,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-14">
      <div
        className="md:w-2/3 md:pr-8"
      >
        <h2 className="text-5xl font-aileron text-neutral font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
      </div>
      <div
        className="md:w-1/3 flex justify-center"
      >
        {!imageLoaded && <div className="skeleton w-80 h-96"></div>}
        <img
          src={sourceImage}
          alt={altImage}
          className="rounded-lg w-80 h-96 object-cover"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
}
