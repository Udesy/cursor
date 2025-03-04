import React, { useRef } from "react";
import { features } from "../constant";
import { hero } from "../assets";

const Features = () => {
  const videoRef = useRef(null);

  return (
    <div className=" relative my-20">
      {features.map((item) => (
        <div className="flex flex-col justify-center items-center gap-10 mt-30">
          <div className="relative">
            <h3 className="text-[3.3rem] font-bold font-geist text-center text-gradient-light dark:text-gradient-dark">
              {item.title}
            </h3>
            <p className=" text-[1.4rem] max-w-[48rem] text-center text-black dark:text-white">
              {item.text}
            </p>
          </div>
          <div className="relative flex justify-center items-center w-full overflow-hidden min-h-[45rem]">
            <div className="absolute z-10 w-full h-full px-[7.2rem] pt-8 bottom-0 ">
              <img
                src={hero}
                className="relative z-1 object-cover rounded-2xl w-full h-full"
                alt="hero"
                width={1296}
                height={670}
              />
            </div>
            <video
              ref={videoRef}
              src={item.videoUrl}
              autoPlay
              muted
              loop
              playsInline={true}
              className="absolute z-20 w-[53rem] h-[37rem] bottom-0 "
              type="video/mp4"
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
