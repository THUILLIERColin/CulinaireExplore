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
      <section id="Form">
        <h1 className="text-4xl font-bold  text-center">
          Créez votre voyage sur mesure
        </h1>
        <p className="text-center font-lovelace text-lg max-w-4xl mx-auto my-10">
          Décrivez votre projet de voyage à l&apos;aide du formulaire
          ci-dessous, un conseiller spécialiste vous contactera dans les
          meilleurs délais pour en discuter.
        </p>
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
              <div className="block mb-2 font-poppins">Description de votre voyage *</div>
              <textarea
                placeholder="Decrire votre voyage ici..."
                className="textarea textarea-bordered textarea-md w-full max-w-xl font-poppins"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <h2 className="text-xl font-bold mt-6 mb-4">
            Vos informations personnelles
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Titre *</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">Monsieru</label>
                <input
                    type="radio"
                    name="Monsieur"
                    className="radio checked:bg-primary"
                    onChange={() => setTitle("Monsieur")}
                    {...(title === "Monsieur" && { checked: true })}
                  />
            </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input input-bordered w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input input-bordered w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="input input-bordered w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn btn-primary">
              Voyager maintenant !
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
