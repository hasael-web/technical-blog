"use client";
import LoadingSpiner from "@/app/__components/LoadingSpiner";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-50/10 flex items-center justify-center">
      <LoadingSpiner />
    </div>
  );
};

export default Loading;
