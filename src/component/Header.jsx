import React from "react";

function Header({ start }) {
  return (
    <>
      <header
        className=" uppercase text-white tracking-wide px-16 max-[650px]:px-8 max-[650px]:bg-[#330f29] max-[650px]:drop-shadow-md
       py-10 max-[650px]:py-5 "
      >
        <h1 className=" flex items-center gap-1">
          the
          <span className=" text-[#2a2a2a] bg-white px-1">product</span>{" "}
          platform
        </h1>
      </header>
    </>
  );
}

export default Header;
