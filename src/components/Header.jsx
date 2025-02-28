import React, { useEffect, useRef, useState } from "react";
import { logo, video, Window } from "../assets";
import Logo from "../assets/nav/Logo";
import { navigation } from "../constant";
import Button from "./Button";

const Header = () => {
  const videoRef = useRef(null);

  return (
    <div className="fixed top-4 z-50 w-full lg:top-6 bg-background h-16 rounded-xl">
      <div className="realtive max-w-[1490px]">
        <div className="relative flex items-center justify-between top-[0.70rem]">
          <a
            aria-label="homepage"
            className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3 left-[2rem]"
            href="/"
          >
            <div className="relative -ml-0.5 w-6 h-6 lg:-ml-1 lg:mr-px lg:w-8 lg:h-8">
              <video
                id="logo-video"
                ref={videoRef}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={video}
                width="100%"
                height="100%"
                preload="auto"
                muted
                autoPlay
                playsInline
                className="object-cover"
              />
            </div>
            <Logo
              className="h-[13px] text-white lg:h-[17px] font-semibold"
              fill="#ffffff"
            />
          </a>
          <ul className="col-start-2 gap-10 px-4 font-geist-mono font-semibold uppercase -tracking-tight text-neutral-900 dark:text-neutral-200 hidden left-0 lg:flex">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="transition-colors duration-300 hover:text-neutral-900 dark:hover:text-foreground motion-reduce:tracking-none"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative flex gap-2">
            <Button className="h-12 w-26">Sign in</Button>
            <Button
              className="text-black bg-foreground h-12 w-32"
              svg={<Window />}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
