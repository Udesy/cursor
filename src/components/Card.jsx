import React, { useRef, useEffect } from "react";
import { card } from "../constant";
import Button from "./Button";

const Card = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="relative mt-[10rem] mx-10 my-10">
      <div className="relative flex flex-row mb-10">
        <div className="relative flex flex-row justify-between w-full bg-cyan-600">
          <div className="relative flex flex-col">
            <h1>Build software</h1>
            <p>
              Intelligent, fast, and familiar, Cursor is the best way to code
              with AI.
            </p>
          </div>
          <Button className="text-nowrap bg-white text-black font-medium">
            See more features
          </Button>
        </div>
      </div>
      <div className="relative">
        <ul className="relative flex flex-row justify-between gap-2">
          {card.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center border border-red-500 bg-neutral-950 max-w-1/3 rounded-2xl overflow-hidden"
            >
              <h2 className="font-geist text-[2.2rem] font-semibold">
                {item.title}
              </h2>
              <p className="text-center">{item.text}</p>
              <div className="relative aspect-[533/461] overflow-hidden p-3">
                <video
                  id="logo-video"
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  className="pointer-events-none relative top-0 inset-0 w-full h-auto"
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
