import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import OurTeam from "../assets/img/bento_our-team.png";
import IWantToTravel from "../assets/img/bento_i-want-to-travel.jpeg";
import HowItWorks from "../assets/img/bento_how-it-works.png";

Bento.propTypes = {
    dataAos: PropTypes.string.isRequired,
    };

export default function Bento({ dataAos }) {
    return (
      <section id="bento" data-aos={dataAos} >
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <Link
                to="/i-want-to-travel"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={IWantToTravel}
                  alt="I want to travel"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Je veux voyager
                </h3>
              </Link>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <Link
                to="/team"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={OurTeam}
                  alt="Our team"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Notre équipe
                </h3>
              </Link>
              <Link
                to="/how-it-works"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src={HowItWorks}
                  alt="How it works"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-aileron text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Comment ça marche ?
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  