import React from "react";

const TestimonialCard = ({ testimonials }) => {
  return (
    <div className="relative flex flex-col">
      {[...testimonials, ...testimonials].map((item) => (
        <div
          key={item.id}
          className="relative bg-white dark:bg-neutral-900/50 max-w-auto border border-neutral-400 dark:border-neutral-800 rounded-2xl m-4 p-6 w-[416px]  hover:opacity-85 duration-200 hover:card-gradient min-h-fit pointer-events-none"
        >
          <div className=" relative">
            <h2 className="text-black dark:text-white">{item.text}</h2>
          </div>
          <div className="relative flex flex-row items-center gap-4 mt-15">
            <div className="relative size-14 rounded-full overflow-hidden">
              <img src={item.imageURL} />
            </div>
            <div className="">
              <h3 className="text-black dark:text-white">{item.name}</h3>
              <p className="text-neutral-400 ">{item.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
