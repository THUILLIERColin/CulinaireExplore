import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";

SplitScreen.propTypes = {
  title: PropTypes.string,
  sourceImage: PropTypes.string,
  altImage: PropTypes.string,
  children: PropTypes.node,
  imagePosition: PropTypes.oneOf(['left', 'right']), // Ajout de la prop imagePosition
};

export default function SplitScreen({ title, sourceImage, altImage, children, imagePosition }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Gérer la classe en fonction de la position de l'image
  const imageOrderClass = imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const aosText = imagePosition === 'right' ? 'left' : 'right';
  const aosImage  = imagePosition === 'right' ? 'right' : 'left';

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }
  , []);

  return (
    <div className="hero flex items-center justify-center mb-14">
      <div className={`hero-content flex-col ${imageOrderClass}`}>
        <div className="text-center lg:text-left" data-aos={`fade-${aosText}`}>
          <h1 className="text-5xl font-aileron font-bold text-neutral">{title}</h1>
          <div className="py-6 font-lovelace text-lg text-neutral">
            {children}
          </div>
        </div>
        <div className="card w-full max-w-xl h-full">
          <div className="card-body">
            <div id="image" data-aos={`fade-${aosImage}`}
            className="rounded-lg size-80 bg-cover bg-center m-4">
                {!imageLoaded && <div className="skeleton w-80 h-96"></div>}
                    <img
                        src={sourceImage}
                        alt={altImage}
                        className="rounded-lg w-80 h-96 object-cover"
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
