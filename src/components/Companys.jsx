import { companys } from "../util/data";
import CompanyList from "./CompanyList";

const Companys = () => {
  const repetitions = 6;

  return (
    <section aria-hidden="true" className="overflow-x-hidden">
      <div className="flex w-max group items-center">
        {Array.from({ length: repetitions }).map((_, index) => (
          <ul
            className="flex items-center gap-8 pr-8 group-hover:[animation-play-state:paused] animate-companyMove shrink-0"
            key={index}
          >
            {companys.map((company, id) => (
              <CompanyList key={id} company={company} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Companys;
