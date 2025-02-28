import React from "react";
import { logos } from "../constant";

const Logo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-[5rem] font-medium">
      <h2 className="uppercase text-lg text-neutral-400">
        Trusted by Engineer's At
      </h2>

      <div className=" relative mx-14 my-14">
        <ul className="flex flex-wrap items-center justify-center flex-1 gap-[3rem]">
          {logos.map((item) => (
            <li key={item.id} className="mr-6">
              <img src={item.logo} alt={item.title} width={180} height={180} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logo;
