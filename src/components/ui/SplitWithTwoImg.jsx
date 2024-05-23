import PropsTypes from 'prop-types';

// images -> contient img et alt de chaque image
SplitWithTwoImg.propTypes = {
    title: PropsTypes.string,
    desc: PropsTypes.string,
    imagesPosition: PropsTypes.oneOf(['left', 'right']),
    images: PropsTypes.arrayOf(
        PropsTypes.shape({
            img: PropsTypes.string,
            alt: PropsTypes.string
        })
    )
};

export default function SplitWithTwoImg({ title, desc, imagesPosition, images}) {
    const imageOrderClass = imagesPosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className={`flex items-center flex-col ${imageOrderClass} justify-between mt-[4.5rem]`}>
      <div className="w-full md:w-[45%] text-start text-[1.1rem] mb-8 md:mb-0">
        <h2 className="pb-4 font-aileron text-neutral text-4xl">
            {title}
        </h2>
        <p className="font-lovelace text-neutral">
            {desc}
        </p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row md:w-6/12 items-center md:justify-between z-[1]">
        <img
          src={images[0].img}
          alt={images[0].alt}
          className="w-[80%] md:w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] rounded-md mb-4 md:mb-0"
        />
        <img
          src={images[1].img}
          alt={images[1].alt}
          className="w-[80%] md:w-[49%] h-[350px] object-cover shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] rounded-md md:absolute md:top-[-10%] md:right-0"
        />
      </div>
    </div>
  );
}
