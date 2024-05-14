import "./KnowUs.css";

export default function KownUs() {
  return (
    <div className="destination">
      <h1>Popular destination</h1>
      <p>Tours give you the opportunity to see the world and experience new</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal Volcano is a complex volcano located on the island of Luzon in
            the Philippines. It is the second most active volcano in the
            Philippines with 33 historical eruptions. All of these eruptions are
            concentrated on Volcano Island, an island near the middle of Taal
            Lake.
          </p>
        </div>

        <div className="image">
          <img
            src="https://images.pexels.com/photos/20067716/pexels-photo-20067716/free-photo-of-route-paysage-montagne-vehicule.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="taal-volcano"
          />
          <img
            src="https://images.pexels.com/photos/20067716/pexels-photo-20067716/free-photo-of-route-paysage-montagne-vehicule.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="taal-volcano"
          />
        </div>
      </div>
    </div>
  );
}
