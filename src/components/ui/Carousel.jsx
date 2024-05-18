import PropTypes from "prop-types";

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};


export default function Carousel({items}) {
  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-200 rounded-box border-2 border-base-300">
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </>
  );
}
