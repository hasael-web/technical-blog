import DrawerCustome from "@/app/__components/DrawerCustome";
import { Bell } from "lucide-react";
import React from "react";

interface IListNotificationProps {}

const ListNotification: React.FC<IListNotificationProps> = ({}) => {
  return (
    <DrawerCustome openIcon={<Bell size={18} />}>
      <div className="flex justify-center items-center w-full h-full">
        <h1>Not Data List</h1>
      </div>
    </DrawerCustome>
  );
};

export default ListNotification;
