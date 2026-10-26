import { faqs } from "../util/data";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <section className="box space-y-18 mb-10" id="faqs">
      <div className="space-y-5 text-center">
        <h2>
          Frequently Asked{" "}
          <span className="text-gradient block lg:inline-block">
            Questions{" "}
          </span>
        </h2>

        <p className="text-small max-w-83.75 md:max-w-138 mx-auto">
          We've compiled a list of the most frequently asked questions about
          SmartNotes to help you get the information you need. If you have any
          other questions, feel free to reach out to our support team.
        </p>
      </div>

      <ul className="relative space-y-5 w-full max-w-200 mx-auto">
        {faqs.map((faq) => (
          <FaqCard key={faq.id} {...faq} />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
