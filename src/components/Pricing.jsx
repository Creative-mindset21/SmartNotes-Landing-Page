import { useState } from "react";

import { pricing } from "../util/data";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePrices = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <section className="box space-y-10 mb-10" id="pricing">
      <div className="space-y-5 text-center">
        <h2>
          <span className="text-gradient">Pricing </span>& Plans
        </h2>

        <p className="text-small max-w-83.75 md:max-w-138 mx-auto ">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 text-xl">
        <button onClick={() => setIsYearly(false)}>Monthly</button>

        <button
          className={`w-16.25 h-8.25 border rounded-full cursor-pointer relative shrink-0 transition-colors ${isYearly ? "bg-linear-2 border-linear-2" : "bg-primary-100 border-primary-100"}`}
          onClick={togglePrices}
        >
          <span
            className={`absolute h-5.25 w-4.75 rounded-full bg-white top-1/2 -translate-y-1/2 shadow transition-all duration-300 ${isYearly ? "left-8.75" : "left-1.25"}`}
          ></span>
        </button>

        <button onClick={() => setIsYearly(true)}>Yearly</button>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-10">
        {pricing.map((prices) => (
          <PricingCard isYearly={isYearly} {...prices} key={prices.id} />
        ))}
      </ul>
    </section>
  );
};

export default Pricing;
