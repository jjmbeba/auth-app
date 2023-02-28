import Image from "next/image";
import React from "react";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="mt-[22.5px] flex items-center gap-[20px]">
      <Image src={"/Google.svg"} width={42} height={42} alt="google-icon" />
      <Image src={"/Facebook.svg"} width={42} height={42} alt="facebook-icon" />
      <Image src={"/Twitter.svg"} width={42} height={42} alt="twitter-icon" />
      <Image src={"/Github.svg"} width={42} height={42} alt="github-icon" />
    </div>
  );
};

export default Socials;
