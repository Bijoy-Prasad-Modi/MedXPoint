const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          At MedXPoint, we are more than just a healthcare facility — we are a
          trusted partner in your journey to better health. Built on a
          foundation of compassion, innovation, and clinical excellence,
          MedXPoint offers a full spectrum of medical services designed to meet
          the unique needs of every patient. Our experienced team works together
          to provide a safe, supportive, and healing environment where your
          comfort and care come first. We are committed to making quality
          healthcare accessible, seamless, and stress-free.
        </p>
      </div>
    </div>
  );
};

export default Biography;
