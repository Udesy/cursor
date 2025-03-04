import React, { useEffect, useRef, useState } from "react";
import { logodark, logolight, Window } from "../assets";
import Logo from "../assets/nav/Logo";
import { navigation } from "../constant";
import Button from "./Button";

const Header = () => {
  const videoRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="fixed top-4 z-50 w-full lg:top-6 bg-background dark:bg-foreground h-16 rounded-xl">
      <div className="realtive max-w-[1490px]">
        <div className="relative flex items-center justify-between top-[0.70rem]">
          <a
            aria-label="homepage"
            className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3 left-[2rem]"
            href="/"
          >
            <div className="pointer-events-none relative -ml-0.5 size-6 mix-blend-multiply dark:mix-blend-lighten lg:-ml-1 lg:mr-px lg:size-8">
              <video
                id="logo-video"
                ref={videoRef}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={theme === "dark" ? logodark : logolight}
                width={32}
                height={32}
                preload="auto"
                muted
                autoPlay="auto"
                playsInline
              />
            </div>
            <Logo
              className="h-[13px] text-black dark:text-white lg:h-[17px] font-semibold"
              fill={theme === "dark" ? "#ffffff" : "#000000"}
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
            <Button className="h-12 w-26 text-black dark:text-white">
              Sign in
            </Button>
            <Button
              className="h-12 w-32 bg-black dark:bg-white text-white dark:text-black"
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
