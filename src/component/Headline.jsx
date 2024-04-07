import React, { useEffect, useState } from "react";
import Svg from "./Svg";

function Headline() {
  const [seconds, setSeconds] = useState(3);
  const [mail, setMail] = useState("");
  const [notification, setNotification] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [seconds]);
  const handelClick = (e) => {
    e.preventDefault();
    if (!mail.match(/\b[A-Za-z0-9._%+-]+@gmail\.com\b/)) {
      setNotification(true);
    }
  };
  return (
    <>
      <section className=" flex flex-col max-[650px]:mx-4 justify-center  h-[calc(100vh-104px)] max-[650px]:h-auto items-center  py-14">
        <h1
          className=" max-[650px]:flex-row-reverse flex items-center text-[#f6f6f6] 
          text-5xl max-[650px]:text-3xl max-[650px]:text-center relative
         font-bold"
        >
          <Svg />
          <span>Launching New Module Soon!</span>
        </h1>
        <p className="text-[#cccccc] text-center text-lg tracking-wide my-4">
          Exciting things are in the works! We're currently
          <span className=" text-[#ffffff]"> Crafting a new feature</span> for
          you. <br /> Keep an eye out for updates – We're working to make it
          available soon!
        </p>
        <h1
          className="text-[#cccccc]  tracking-[0.3rem] [word-spacing-10] uppercase 
         max-[650px]:[word-spacing-4] max-[650px]:tracking-widest text-center text-xl my-6 font-semibold"
        >
          get ready for the revel !
        </h1>
        <div
          className=" text-6xl flex gap-10 my-10 items-center bg-gradient-to-r
         rounded-lg px-8 py-6 from-[#4a173f] via-[#3e1744] to-[#2d174c]"
        >
          <span className=" text-[#ffffff] flex items-center flex-col tracking-wide">
            00 <span className=" text-[#CCCCCC] text-lg ">Minutes</span>
          </span>
          <span className=" text-[#CCCCCC]">:</span>
          <span className=" text-[#ffffff] flex items-center flex-col tracking-wide">
            0{seconds}
            <span className=" text-[#CCCCCC] text-lg ">Seconds</span>
          </span>
        </div>
        <footer className=" my-4">
          <p className=" text-[#CCCCCC] text-center [word-spacing-3] text-base font-normal tracking-wider">
            Be the first to know! Share your email and We'll notify you when
            it's live
          </p>
          <form
            action="#"
            className=" my-4 w-full flex items-center max-[650px]:flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Please enter your email id"
              onChange={(e) => setMail(e.currentTarget.value)}
              className=" w-full bg-transparent text-[#cccccc] border-[#CCCCCC] border rounded-lg text-lg py-1.5 px-3 outline-none"
            />
            <button
              type="button"
              className={` select-none cursor-pointer font-semibold text-lg px-6 py-1.5 rounded-lg capitalize tracking-wider
             bg-[#ffffff] flex-shrink-0 max-[650px]:w-full ${
               mail ? "text-black" : "text-[#878787] "
             }`}
              onClick={handelClick}
            >
              Notify me
            </button>
          </form>
          <span className=" text-start px-3 text-[#F14722] font-semibold tracking-wide">
            {notification ? "invalid email" : ""}
          </span>
        </footer>
      </section>
    </>
  );
}

export default Headline;
