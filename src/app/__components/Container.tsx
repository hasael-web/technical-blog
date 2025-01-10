import { cn } from "@/lib/utils";
import React from "react";

type TPropsContainer = {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const Container = ({ children, className }: TPropsContainer) => {
  return (
    <div
      className={cn(" max-w-[1200px] mx-auto min-h-screen w-full", className)}
    >
      {children}
    </div>
  );
};

export default Container;
