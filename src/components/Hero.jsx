import React from "react";
import { hero, Window } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative" id="hero">
      <div className="relative top-[8rem] flex justify-center items-center">
        <div className="relative z-1 mx-5">
          <img
            src={hero}
            alt="hero"
            className="rounded-[1.2rem] max-h-[41rem] w-full"
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

          <div className="flex gap-5">
            <Button
              className="bg-white text-black flex items-center w-auto p-7"
              svg={<Window />}
            >
              Download for Windows
            </Button>
            <Button className="bg-white text-black w-auto flex items-center p-7">
              All downloads
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
