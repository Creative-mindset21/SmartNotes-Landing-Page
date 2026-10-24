import arrow from "../assets/arrow.svg";
import heroImg from "../assets/abstract-shapes.png";

const Hero = () => {
  return (
    <section className="pt-50 pb-16 lg:pt-40 box flex items-center justify-between gap-10">
      <div>
        <h1>
          <span className="text-gradient">Intelligent</span> cloud-based{" "}
          <span className="text-gradient">note-taking</span> and collaboration
          tool
        </h1>

        <p className="text-primary-100 mb-12.5">
          Experience the power of smart note-taking and transform the way you
          work today.
        </p>

        <form className="max-w-108.5 relative bg-text-color rounded-lg border border-secondary-200 py-2 px-4 flex items-center gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1 min-w-0 p-3 text-primary-300 bg-transparent outline-none"
          />

          <button className="btn flex items-center shrink-0 gap-2">
            Sign up <img src={arrow} alt="" />
          </button>
        </form>
      </div>

      <img src={heroImg} alt="" className="hidden lg:inline-block" />
    </section>
  );
};

export default Hero;
