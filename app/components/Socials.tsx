"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="mt-[31px] w-full flex flex-col items-center justify-center">
      <span className="font-[400] text-[14px] leading-[19px] text-[#828282]">
        or continue with these social profiles
      </span>
      <div className="mt-[22.5px] flex items-center gap-[20px] [&>*]:cursor-pointer">
        <Image
          onClick={() => {}}
          src={"/Google.svg"}
          width={42}
          height={42}
          alt="google-icon"
        />
        <Image
          onClick={() => {}}
          src={"/Facebook.svg"}
          width={42}
          height={42}
          alt="facebook-icon"
        />
        <Image
          onClick={() => {}}
          src={"/Twitter.svg"}
          width={42}
          height={42}
          alt="twitter-icon"
        />
        <Image
          onClick={() => {}}
          src={"/Github.svg"}
          width={42}
          height={42}
          alt="github-icon"
        />
      </div>
      
    </div>
  );
};

export default Socials;
