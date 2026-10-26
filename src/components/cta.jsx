import arrow from "../assets/arrow.svg";
import heroImg from "../assets/abstract-shapes.png";

const cta = () => {
  return (
    <section className="box flex items-center justify-between gap-10 pb-10 border-b border-secondary-200">
      <div className="lg:basis-[50%]">
        <h1>
          Unlock the Full Potential of{" "}
          <span className="text-gradient">SmartNotes</span>
        </h1>

        <p className="text-primary-100 mb-12.5">
          Ready to streamline your workflow and boost your productivity? Start
          your free trial of SmartNotes today and experience the power of smart
          note-taking.
        </p>

        <button className="btn flex items-center shrink-0 gap-2">
          Sign Up for Free <img src={arrow} alt="" />
        </button>
      </div>

      <img src={heroImg} alt="" className="hidden lg:inline-block" />
    </section>
  );
};

export default cta;
