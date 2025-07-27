/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-10/12 xl:w-[77%] 2xl:w-2/3 mx-auto flex flex-col-reverse lg:flex-row overflow-y-auto mt-[160px] lg:mt-[150px]">
      <div className="w-full lg:w-[60%] lg:mt-[57px]">
        <h1 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left hidden lg:block">
          Want to Turn Social Media Into a <br /> Profitable Career?
        </h1>
        <h1 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left lg:hidden">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h2 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] font-urbanist text-[#00E7F9] text-shadow-custom text-center lg:text-left">
          Discover your way to success <br /> with Fametonic:
        </h2>
        <ul className="pt-[22px] lg:pt-4 flex flex-col gap-[13px] text-base font-medium lg:font-semibold text-white lg:w-[70%]">
          <li className="flex items-start gap-2.5">
            <span>✨</span>
            <p>Start growing your influence right away—no waiting required!</p>
          </li>
          <li className="flex items-start gap-2.5">
            <span>✨</span>
            <p>
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </p>
          </li>
          <li className="flex items-start gap-2.5">
            <span>✨</span>
            <p>Use a Personal AI Worker to boost your content</p>
          </li>
          <li className="flex items-start gap-2.5">
            <span>✨</span>
            <p>
              Learn from expert-led courses designed for aspiring influencers
            </p>
          </li>
        </ul>
        <div className="pt-[22px] pb-[32px] lg:hidden text-center">
          <p className="font-medium text-xs">
            By clicking "Get Started", you agree with Terms and Conditions,
            <br />
            Privacy Policy, Subscription Terms
          </p>
          <p className="pt-[12px] text-[10px] font-medium">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col lg:w-[313px] text-center text-white">
          <button className="w-full lg:w-[313px] mt-[30px] h-10 rounded-[8px] bg-[rgba(252,0,78,1)] flex items-center justify-center uppercase button-shadow text-white text-xl font-bold gap-2">
            GET STARTED
            <Image
              src="/chevron-right.svg"
              width={9}
              height={6}
              alt="Chevron"
            />
          </button>
          <p className="pt-[10px] text-sm">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div className="hidden lg:block pt-[30px] text-[#ABABAB]">
          <p className="font-medium">
            By clicking "Get Started", you agree with Terms and Conditions,
            <br />
            Privacy Policy, Subscription Terms
          </p>
          <p className="pt-[12px] text-[10px] font-medium">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 w-[666px] h-[679px]">
        <div className=" w-[666px] h-[679px]  lg:block">
          <Image src="/fametonic-hero.png" fill alt="Hero" objectFit="cover" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
