import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

import { testimonials } from "../util/data";
import doubleQuote from "../assets/double-quote.svg";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className="w-full max-w-117.75 lg:max-w-150 mx-auto mt-20 mb-30 space-y-5 text-center leading-normal relative px-5">
      {/* First Quotation Mark */}
      <img
        src={doubleQuote}
        alt=""
        className="absolute -top-10 md:-top-7 md:-left-5 pointer-events-none"
      />

      {/* The Active Testimonial */}
      <p className="font-bold text-xl md:text-2xl lg:text-3xl leading-[1.4] md:tracking-[-1%]">
        {activeTestimonial?.testimonial}
      </p>

      <div className="mx-auto max-w-lg mt-8">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={{
            425: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {testimonials.map(({ id, name, testimonial }) => (
            <SwiperSlide
              key={id}
              onClick={() => setActiveTestimonial({ id, name, testimonial })}
            >
              <button
                className={`${activeTestimonial.id === id ? "font-semibold text-text-color" : "text-primary-200 hover:text-text-color"} cursor-pointer transition-colors duration-300 whitespace-nowrap`}
                aria-pressed={activeTestimonial?.id === id}
              >
                {name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Quotation Mark */}
      <img
        src={doubleQuote}
        alt=""
        className="absolute -bottom-10 right-10 md:-bottom-7 md:right-5 rotate-180 scale-x-[-1] pointer-events-none"
      />
    </section>
  );
};

export default Testimonial;
