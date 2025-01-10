import { Bell, SquarePen } from "lucide-react";
import React from "react";

export const listMenuRouter: Array<{
  label: string;
  link: string;
  access: string;
}> = [
  {
    label: "Article",
    link: "/list-article",
    access: "list-article",
  },
  //   {
  //     label: "Creator",
  //     link: "/creator",
  //     access: "creator",
  //   },
  //   {
  //     label: "Community",
  //     link: "/community",
  //     access: "community",
  //   },
  {
    label: "Subcribe",
    link: "/subcribe",
    access: "subcribe",
  },
];
