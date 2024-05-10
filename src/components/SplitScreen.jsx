import PropTypes from 'prop-types';

SplitScreen.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
  altImage: PropTypes.string,
  children: PropTypes.node,
  imagePosition: PropTypes.oneOf(['left', 'right']), // Ajout de la prop imagePosition
};

export default function SplitScreen({ title, sourceImage, altImage, children, imagePosition }) {
  // Gérer la classe en fonction de la position de l'image
  const imageOrderClass = imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className="hero flex items-center justify-center mb-14">
      <div className={`hero-content flex-col ${imageOrderClass}`}>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-aileron">{title}</h1>
          <p className="py-6 font-lovelace text-lg">
            {children}
          </p>
        </div>
        <div className="card w-full max-w-xl h-full">
          <div className="card-body">
            <div id="image" className="rounded-lg size-80 bg-cover bg-center m-4">
                <img
                    src={sourceImage}
                    alt={altImage}
                    loading='lazy'
                    className="rounded-lg w-128 h-128 object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
