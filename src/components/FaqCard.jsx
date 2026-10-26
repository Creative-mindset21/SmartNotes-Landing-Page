import arrow from "../assets/arrow.svg";
import arrowRight from "../assets/colored-arrow-right.svg";

const FaqCard = ({ question, answer }) => {
  return (
    <li className="cursor-pointer">
      <details className="appearance-none py-4 px-6 group open:bg-text-color rounded-lg border border-secondary-200">
        <summary className="flex justify-between items-center text-lg font-bold group-open:text-primary-400">
          {question}
          <img
            src={arrow}
            alt=""
            className="border border-secondary-200 p-1 rounded-lg group-open:hidden w-8"
          />
          <img
            src={arrowRight}
            alt=""
            className="border border-secondary-200 p-1 rounded-lg hidden group-open:inline-flex w-8"
          />
        </summary>

        <p className="text-primary-300 text-small pt-6">{answer}</p>
      </details>
    </li>
  );
};

export default FaqCard;
