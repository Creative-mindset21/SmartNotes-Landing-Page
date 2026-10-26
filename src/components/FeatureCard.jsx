const FeatureCard = ({ title, description, iconSrc }) => {
  return (
    <li className="feature">
      <img
        src={iconSrc}
        alt=""
        className="mb-6 border border-secondary-200 p-1.5 rounded-[5px]"
        aria-hidden="true"
      />

      <h3>{title}</h3>
      <p className="text-small">{description}</p>
    </li>
  );
};

export default FeatureCard;
