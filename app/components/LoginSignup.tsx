"use client";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Socials from "./Socials";

type Props = {
  heading: string;
  subHeading?: string;
  buttonText: string;
  setLogin: Function;
  linkText:string;
  link:string;
  isLogin:boolean;
};

const LoginSignup = ({ heading, subHeading, buttonText, setLogin, linkText, link, isLogin }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start border border-[#BDBDBD] rounded-[24px] px-[58px] py-[28px] max-w-[473px] max-h-[634px]">
        <Logo />
        <h1 className="mt-[32px] max-w-[280px] font-[600] text-[18px] leading-[25px] text-[#333333]">
          {heading}
        </h1>
        {subHeading && (
          <h2 className="max-w-[318px] mt-[14px] font-[400] text-[16px] leading-[22px] text-[#333333]">
            {subHeading}
          </h2>
        )}

        <form action="" className="mt-[34px] flex flex-col gap-[14.5px]">
          <div className="relative">
            <Image
              className="input-icon"
              src={"/email.svg"}
              width={20}
              height={16}
              alt="email-icon"
            />
            <input type="email" placeholder="Email" className="text-input" />
          </div>
          <div className="relative">
            <Image
              className="input-icon"
              src={"/password.svg"}
              width={20}
              height={16}
              alt="password-icon"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
            />
          </div>
          <button className="btn btn-primary">{buttonText}</button>
        </form>
        <Socials />
        <div className="mt-[27px] w-full text-center font-[400] text-[14px] leading-[19px] text-[#828282]">
          {linkText}{" "}
          <span onClick={() => setLogin(!isLogin)} className="text-[#2D9CDB] cursor-pointer">
            {link}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
