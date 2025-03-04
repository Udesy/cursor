import React, { useMemo } from "react";
import { testimonials } from "../constant";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const columns = useMemo(() => {
    return Array.from({ length: 5 }, () => shuffleArray(testimonials));
  }, [testimonials]);

  return (
    <div className="relative overflow-hidden max-h-[1273px]">
      <div className="relative flex w-[1549px]">
        <div className="relative flex flex-row justify-between w-full -left-34 ">
          {columns.map((item, index) => (
            <div
              key={index}
              className={`relative flex justify-evenly hover:[animation-play-state:paused] ${
                index % 2 === 0 ? "animate-scrollUp" : "animate-scrollDown"
              }`}
            >
              <TestimonialCard id="container" testimonials={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bg-gradient-to-b testimonial-gradient-light dark:from-black from-10% to-transparent w-full h-[450px] top-0 left-0"></div>
      <div className="absolute bg-gradient-to-t testimonial-gradient-light dark:from-black from-10% to-transparent w-full h-[450px] bottom-0 left-0"></div>
      <div className="absolute bg-gradient-to-r testimonial-gradient-light dark:from-black from-10% to-transparent w-[400px] h-full top-0 left-0"></div>
      <div className="absolute bg-gradient-to-l testimonial-gradient-light dark:from-black from-10% to-transparent w-[400px] h-full top-0 right-0"></div>
    </div>
  );
};

export default Testimonials;
