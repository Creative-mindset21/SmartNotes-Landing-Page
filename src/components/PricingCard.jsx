import arrow from "../assets/arrow.svg";
import check from "../assets/check.png";

const PricingCard = ({ iconSrc, planName, offers, isYearly, price }) => {
  return (
    <li className="bg-primary-50 py-10 px-8 rounded-[10px] space-y-8 border-2 border-secondary-200 w-full max-w-95 mx-auto group nth-of-type-[2]:bg-transparent">
      <div className="flex items-center gap-4">
        <img
          src={iconSrc}
          alt=""
          className="border border-secondary-200 p-1.5 rounded-[5px]"
          aria-hidden="true"
        />

        <p className="text-small text-secondary-200 ">{planName}</p>
      </div>

      <p className="text-primary-300 leading-normal group-nth-of-type-[2]:text-secondary-200">
        <span className="text-primary-400 text-[40px] leading-[120%] font-bold group-nth-of-type-[2]:text-primary-50">
          {isYearly ? price.yearly : price.monthly}
        </span>{" "}
        / {isYearly ? "year" : "month"}
      </p>

      <div>
        <ul className="space-y-4 text-primary-300">
          {offers.map((offer, id) => (
            <li
              className="flex items-center gap-4 group-nth-of-type-[2]:text-primary-100"
              key={id}
            >
              <img src={check} alt="" aria-hidden="true" />
              {offer}
            </li>
          ))}
        </ul>
      </div>

      <button className="pricing-btn group-nth-of-type-[2]:btn-gradient">
        Start Free Trial <img src={arrow} alt="" />
      </button>

      <p className="text-center text-primary-200 group-last-of-type:hidden">
        No credit card required
      </p>
    </li>
  );
};

export default PricingCard;
