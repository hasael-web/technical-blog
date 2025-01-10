import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";

interface IDrawerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  openIcon?: React.ReactNode;
  cancelText?: string;
  submitText?: string;
  isLoading?: boolean;
}

const DrawerCustome: React.FC<IDrawerProps> = ({
  children,
  description = "",
  title = "",
  openIcon = "Open",
  cancelText = "Cancel",
  submitText = "Submit",
  isLoading,
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="cursor-pointer">
        {openIcon}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className="">
          <div className="flex gap-2">
            <DrawerClose
              disabled={isLoading}
              className="flex-1 border border-gray-700 rounded-lg hover:bg-gray-100"
            >
              <p>{cancelText}</p>
            </DrawerClose>
            <Button disabled={isLoading} className="flex-1">
              {submitText}
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCustome;
