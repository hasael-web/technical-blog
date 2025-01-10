import { Github } from "lucide-react";
import React from "react";

const CardHeaderContent = () => {
  return (
    <div className="border rounded-lg flex justify-center items-center gap-3 py-2">
      <div className="rounded-full bg-black w-5 h-5 flex text-white items-end justify-center">
        <Github color="white" size={17} />
      </div>
      <h1>GitHup</h1>
    </div>
  );
};

export default CardHeaderContent;
