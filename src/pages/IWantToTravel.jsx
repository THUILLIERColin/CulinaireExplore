import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Select from "../components/forms/Select";
import NumberPicker from "../components/forms/NumberPicker";
import europeanCountries from "../data/countries.json";
import { useNavigate } from "react-router-dom";

export default function IWantToTravel() {
  let navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [days, setDays] = useState(15);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      destination,
      departureDate,
      adults,
      children,
      days,
      description,
      title,
      firstName,
      lastName,
      phone,
      email,
    });
    navigate("/?success=true");
  };

  return (
    <>
      <Navbar />
      <form
        className="max-w-4xl mx-auto my-10 bg-base-200 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Faîtes créer votre voyage</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Select
              label="Destination *"
              options={europeanCountries}
              placeholder="Sélectionnez un pays"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">Date de départ *</label>
            <input
              type="date"
              name="departureDate"
              className="input input-bordered w-full"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div>
            <NumberPicker
              label="Adulte(s) *"
              value={adults}
              onChange={setAdults}
            />
          </div>
          <div>
            <NumberPicker
              label="Enfant(s)"
              value={children}
              onChange={setChildren}
            />
          </div>
          <div>
            <NumberPicker
              label="Durée du séjour (en jours)"
              value={days}
              onChange={setDays}
            />
          </div>
          <div className="col-span-2">
            <div className="block mb-2">
              Description de votre voyage *
            </div>
            <textarea placeholder="Decrire votre voyage ici..." className="textarea textarea-bordered textarea-md w-full max-w-xl" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-6 mb-4">
          Vos informations personnelles
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <button type="button" className="btn" onClick={() => setTitle("M")}>
              MR
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => setTitle("Mme")}
            >
              MME
            </button>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              className="input input-bordered"
              placeholder="Prénom *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              className="input input-bordered"
              placeholder="Nom *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              className="input input-bordered"
              placeholder="Téléphone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary">
            Voyager maintenant !
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}
