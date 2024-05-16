import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Bento.propTypes = {
    dataAos: PropTypes.string.isRequired,
    bento : PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })).isRequired,
    };

export default function Bento({ dataAos , bento }) {
    return (
      <section id="bento" data-aos={dataAos} >
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <Link
                to={bento[0].link}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={bento[0].img}
                  alt="I want to travel"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {bento[0].title}
                </h3>
              </Link>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <Link
                to={bento[1].link}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={bento[1].img}
                  alt="Our team"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {bento[1].title}
                </h3>
              </Link>
              <Link
                to={bento[2].link}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={bento[2].img}
                  alt="How it works"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {bento[2].title}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  