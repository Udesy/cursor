import React from "react";
import Button from "./Button";
import { footerlogo, logo } from "../assets";
import Themetoggle from "./Themetoggle";

const Footer = () => {
  return (
    <footer>
      <div className="relative flex flex-col gap-30 mt-30 text-black dark:text-white">
        <div className="flex flex-row-reverse justify-between mx-25">
          <div className="realtive flex justify-center items-center w-[381px]">
            <img src={footerlogo} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col mt-11 gap-4">
            <p className="text-gradient-light dark:text-gradient-dark text-[7rem] font-geist font-semibold">
              Try Cursor Now
            </p>
            <Button
              className="text-white dark:text-black py-8 bg-black dark:bg-white"
              svg={<img src={logo} className="w-8 h-8" />}
            >
              Download for free
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-20 my-10">
          <div className="flex flex-row gap-30">
            <div className="flex flex-col gap-10">
              <h3>hi@cursor.com</h3>
              <div>
                <p className="bg-neutral-700 rounded-sm text-[0.9rem] text-center">
                  SOC 2 Certified
                </p>{" "}
                <h4>Made by Anysphere</h4>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-40">
              <div className="flex flex-col gap-4">
                <p>Pricing</p>
                <p>Downloads</p>
                <p>Docs</p>
                <p>Forum</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Careers</p>
                <p>Company</p>
                <p>Security</p>
                <p>Privacy</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Terms</p>
                <p>Changelog</p>
                <p>Github</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <select></select>
            </div>
            <div>
              <Themetoggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
