import { cn } from "@/lib/utils";
import React from "react";

type TPropsSubContainer = {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const SubContainer = ({
  children,
  className = "max-w-[1200px]",
}: TPropsSubContainer) => {
  return <div className={cn(" mx-auto  w-full", className)}>{children}</div>;
};

export default SubContainer;
