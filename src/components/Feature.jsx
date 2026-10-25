import { features } from "../util/data";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <section className="box space-y-22">
      <div className="space-y-6 text-center">
        <h2>
          Discover the Power of{" "}
          <span className="block lg:inline-block text-gradient">
            SmartNotes
          </span>
        </h2>
        <p className="max-w-83.75 md:max-w-138 mx-auto text-small">
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
        </p>
      </div>

      <ul className="feature-cards">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.id} />
        ))}
      </ul>
    </section>
  );
};

export default Feature;
