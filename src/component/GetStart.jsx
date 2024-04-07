import React from "react";
import Lottie from "react-lottie";
import confati from "../Lottie/Animation.json";

function GetStart() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confati,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className=" text-[#EFEFEF] flex flex-col justify-center h-[calc(100vh-104px)] items-center py-14">
        <div
          className=" w-[500px] max-[650px]:w-[85%] text-center [word-spacing-10]  tracking-wide
           flex flex-col gap-4 bg-gradient-to-r rounded-xl
         p-10 from-[#4a173f] via-[#3e1744] to-[#2d174c]"
        >
          <h1 className=" text-[#f6f6f6] text-5xl font-bold">
            We are Live Now!
          </h1>
          <p className="text-[#cccccc]">
            Our new feature is now{" "}
            <span className=" text-[#ffffff]"> Live and ready </span>for you to
            explore. Go ahead and give it a try
          </p>
          <button
            className=" mt-8 bg-white w-max ml-[50%] translate-x-[-50%]
           tracking-wider text-[#0F0F0F] text-lg px-4 py-1 rounded-lg font-semibold"
          >
            Get Started
          </button>
        </div>
        <div className=" absolute -z-10">
          <Lottie
            options={defaultOptions}
            height={window.innerWidth <= 650 ? 800 : 900}
            width={window.innerWidth <= 650 ? "100%" : 600}
          />
        </div>
      </section>
    </>
  );
}

export default GetStart;
