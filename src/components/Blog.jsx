import React from "react";
import Cup from "./Cup";
import Button from "./Button";
import { hero, user } from "../assets";

const Blog = () => {
  return (
    <div className="relative p-24 mt-20">
      <div className="relative flex flex-row justify-between border border-neutral-600 rounded-2xl hover:border-neutral-400 bg-white dark:bg-[rgba(12,12,12,1)] p-20 duration-400">
        <div className="relative flex flex-col gap-4">
          <div
            id="tag"
            className="relative flex flex-row items-center bg-neutral-400/20 dark:bg-neutral-500/10 w-fit p-2 rounded-lg"
          >
            <Cup fill="#D4D4D4E6" className="h-6 w-6 " />
            <p className="uppercase text-[1rem] ml-1 text-neutral-300/90">
              Blog
            </p>
          </div>
          <div id="text" className="realtive flex flex-col gap-7 mb-15">
            <h1 className="font-geist font-semibold text-4xl text-black dark:text-white">
              Iterating with Shadow Workspaces
            </h1>
            <p className="text-neutral-500 dark:text-neutral-300/90 text-lg max-w-[32rem]">
              Hidden Windows and kernel-level folder proxies to let AIs iterate
              on code without affecting the user.
            </p>
            <Button className="font-semibold bg-white dark:bg-black text-black dark:text-white">
              Keep Reading
            </Button>
          </div>
          <div
            id="user-info"
            className="relative flex flex-row items-center gap-5 "
          >
            <div className="relative w-18 h-18 overflow-hidden rounded-2xl">
              <img
                src={user}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative flex flex-col">
              <h3>Posted by Arvind</h3>
              <p className="text-neutral-300/90">19 minutes read</p>
            </div>
          </div>
        </div>
        <div className="relatives max-w-[35rem] h-[30rem] ml-25 overflow-hidden rounded-2xl">
          <img src={hero} alt="hero" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
