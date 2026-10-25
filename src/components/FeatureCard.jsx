const FeatureCard = ({ title, description, iconSrc }) => {
  return (
    <li className="feature">
      <img src={iconSrc} alt="" className="mb-6" aria-hidden="true" />

      <h3>{title}</h3>
      <p className="text-small">{description}</p>
    </li>
  );
};

export default FeatureCard;
