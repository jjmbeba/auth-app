import Image from "next/image";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="w-screen h-screen lg:flex items-center justify-center">
      <div className="px-[20px] lg:px-[58px] pt-[17px] pb-[116px] lg:rounded-[24px] lg:pb-[28px] lg:pt-[28px] box-border lg:border border-[#BDBDBD]">
        <Image src={"/devchallenges.svg"} width={135} height={18} alt="logo" />
        <h1 className="pt-[33.53px] font-[600] text-[18px] leading-[25px] tracking-[-0.035em] text-[#333333] lg:max-w-[318px]">
          Join thousands of learners from around the world
        </h1>
        <p className="pt-[14.5px] font-[400] text-[16px] leading-[22px] tracking-[-0.035em] text-[#333333] lg:max-w-[318px]">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <div className="relative">
          <Image
            className="absolute top-[70%] left-[14px] translate-y-[-50%]"
            src={"/email.svg"}
            width={20}
            height={16}
            alt="email-icon"
          />
          <input
            className="mt-[34.66px] box-border w-full py-[13px] pl-[46px] lg:max-w-[356px] border border-[#BDBDBD] rounded-[8px] focus:outline-none placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[22px] placeholder:tracking-[-0.035px] placeholder:text-[#828282]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <Image
            className="absolute top-[60%] left-[14px] translate-y-[-50%]"
            src={"/password.svg"}
            width={20}
            height={16}
            alt="password-icon"
          />
          <input
            className="mt-[14.5px] box-border w-full py-[13px] pl-[46px] lg:max-w-[356px] border border-[#BDBDBD] rounded-[8px] focus:outline-none placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[22px] placeholder:tracking-[-0.035px] placeholder:text-[#828282]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button className="mt-[22.5px] lg:max-w-[356px] box-border w-full py-[7px] bg-[#2F80ED] text-white text-[16px] leading-[22px] tracking-[-0.035em] rounded-[8px]">
          Start coding now
        </button>
        <div className="mt-[31.45px] flex flex-col items-center lg:max-w-[356px]">
          <span className="font-[400] text-[14px] leading-[19px] tracking-[-0.035em] text-[#828282]">
            or continue with these social profile
          </span>
          <Socials />
        </div>
        <div className="mt-[27px] lg:max-w-[356px] font-[400] text-[#828282] text-[14px] leading-[19px] tracking-[-0.035em] text-center">
          Already a member?
          <span className="text-[#2D9CDB]">Login</span>
        </div>
      </div>
    </main>
  );
}
