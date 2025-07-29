/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section-container flex flex-col-reverse lg:flex-row overflow-y-auto mt-[120px] lg:mt-[140px]">
      <div className="w-full lg:w-[65%] lg:mt-[57px] z-1">
        <h1 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left hidden lg:block">
          Want to Turn Social Media Into a <br /> Profitable Career?
        </h1>
        <h1 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] text-white font-urbanist text-center lg:text-left lg:hidden">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h2 className="font-extrabold lg:font-bold text-[25px] lg:text-[35px] font-urbanist text-[#00e7f9] hero-text-shadow text-center lg:text-left">
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
        <div className="pt-[22px] pb-[32px] lg:hidden text-center text-[#ABABAB]">
          <p className="font-medium text-xs ">
            By clicking "Get Started", you agree with Terms and Conditions,
            <br />
            Privacy Policy, Subscription Terms
          </p>
          <p className="pt-[12px] text-[10px] font-medium ">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col lg:w-[313px] text-center text-white">
          <button className="w-full lg:w-[313px] lg:mt-[30px] mt-[2px] h-10 rounded-[8px] bg-[#fc004e] flex items-center justify-center uppercase shadow-[2px_2px_10px_0px_rgba(0,_231,_249)] text-white text-xl font-bold gap-2 cursor-pointer">
            GET STARTED
            <Image
              src="/chevron-right.svg"
              width={9}
              height={6}
              alt="Chevron"
            />
          </button>
          <p className="pt-[10px] text-xs sm:pb-2">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <div className="hidden lg:block pt-[30px] text-[#ABABAB] ">
          <p className="font-medium">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy <br /> Policy, Subscription Terms
          </p>
          <p className="pt-[12px] text-[10px] font-medium">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/3 lg:-ml-[250px] relative aspect-[666/679]">
        <Image
          src="/fametonic-hero.png"
          alt="Hero"
          fill
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
