import React from "react";

const HeroSection = () => {
  return (
    <div className="my-3 w-full rounded-md flex gap-3 flex-col justify-center items-center text-center py-10 bg-gray-300">
      <p className="tracking-widest text-sm ">WELCOME TO HASAEL BLOG</p>
      <div className="w-[600px] ">
        <h2 className="text-3xl font-semibold">
          Craft narratives that ignite{" "}
          <span className="text-rose-700 ">inspiration</span>,{" "}
          <span className="text-rose-700 ">knowledge</span>, and
          <span className="text-rose-700 "> entertainment</span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
