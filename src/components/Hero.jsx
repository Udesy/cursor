import React from "react";
import { demo, hero, Window } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative max-h-screen" id="hero">
      <div className="relative top-[8rem] flex justify-center items-center overflow-hidden">
        <div className="relative z-1 mx-5 aspect-square">
          <img
            src={hero}
            alt="hero"
            className="rounded-[1.2rem] max-h-[40rem] w-screen scale-1.2"
          />
        </div>
        <div className="absolute z-2 top-[2rem] text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white text-[9rem] font-geist font-semibold">
            The AI Code Editor
          </h1>

          <div className=" max-w-[38rem]">
            <p className="text-white text-[1.3rem] text-geist-mono font-medium">
              Built to make you extraordinarily productive, Cursor is the best
              way to code with AI.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <Button
              className="bg-white text-black flex items-center font-semibold text-[1.1rem] px-2.5 py-2 h-15"
              svg={<Window className="size-5" />}
            >
              Download for Windows
            </Button>
            <Button className="bg-white dark:bg-black text-black dark:text-white w-auto flex items-center font-semibold text-[1.1rem] px-2.5 py-3.5 h-15">
              All downloads
            </Button>
          </div>
        </div>

        <div className="absolute z-10 overflow-hidden top-[28rem] pointer-events-none">
          <img
            src={demo}
            alt="demo"
            width={1400}
            height={1200}
            className="object-cover w-[80rem] h-[12rem] object-top rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
