const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          MedXPoint Medical Institute is a modern healthcare center offering
          advanced, compassionate medical services tailored to every individual.
          With a team of expert professionals, we combine innovation and empathy
          to ensure every patient receives focused, high-quality care. At
          MedXPoint, your well-being comes first — we're here to guide you on a
          seamless path to health and healing.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
