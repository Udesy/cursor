import React, { useRef, useEffect } from "react";
import { card } from "../constant";
import Button from "./Button";

const Card = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative mt-[10rem] mx-10 flex flex-col py-10 bg-white dark:bg-black">
      <div className="relative flex flex-row mb-[7rem]">
        <div className="relative flex flex-row items-center justify-between w-full mx-16">
          <div className="relative flex flex-col">
            <h1 className="text-[3.25rem] font-geist font-semibold text-gradient-light dark:text-gradient-dark">
              Build software faster
            </h1>
            <p className="text-xl font-semibold">
              Intelligent, fast, and familiar, Cursor is the best way to code
              with AI.
            </p>
          </div>
          <Button className="relative text-nowrap text-lg bg-black text-white dark:bg-white darktext-black font-medium min-h-12 px-2.5">
            See more features
          </Button>
        </div>
      </div>
      <div className="relative">
        <ul className="relative flex flex-row justify-between gap-3 mx-16">
          {card.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center border border-neutral-600 hover:border-neutral-400 duration-400 bg-[rgba(12,12,12,1)] max-w-1/3 rounded-2xl overflow-hidden"
            >
              <div className="relative flex flex-col gap-3 mt-6 mb-2">
                <h2 className="font-geist text-[2.2rem] font-semibold">
                  {item.title}
                </h2>
                <p className="max-w-[23rem] text-lg text-neutral-400">
                  {item.text}
                </p>
              </div>
              <div className="relative aspect-[533/461] overflow-hidden p-3">
                <video
                  id="logo-video"
                  ref={videoRef}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="pointer-events-none relative top-0 inset-0 w-full h-auto opacity-90"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
