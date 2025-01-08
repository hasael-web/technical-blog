import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface IProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

const Container: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={cn("w-full min-h-screen", className)}>
      <div className="max-w-[1220px] h-auto  w-full mx-auto">{children}</div>
    </div>
  );
};

export default Container;
