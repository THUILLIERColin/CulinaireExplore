import Carousel from './Carousel';
import airplane from '../assets/airplane.svg';

export default function Hero() {
  return (
    <>
      <div className="hero min-w-screen my-10">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-left">
                <h1 className="text-5xl font-aileron text-neutral mr-10">It&apos;s time to travel!</h1>
                <p className="py-6 text-neutral font-lovelace">Direction le <img src={airplane} alt="Avion" className="w-10 h-10 inline-block" /> plaisir</p>
                <button className="btn btn-primary font-poppins">Reservez d&egrave;s maintenant !</button>
            </div>
            <Carousel />
        </div>
    </div>
    </>
  );
}
