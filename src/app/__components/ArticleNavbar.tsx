"use client";
import React, { useState } from "react";
import SubContainer from "./SubContainer";
import { listMenuRouter } from "@/mock/list-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, SquarePen } from "lucide-react";
import ListNotification from "./ListNotification";
import { redirect } from "next/navigation";

const ArticleNavbar = () => {
  return (
    <>
      <SubContainer>
        <div className="flex justify-between items-center py-10 mb-1">
          <div className="flex h-5 items-center space-x-4">
            <Button variant="ghost" onClick={() => redirect("/article")}>
              <h1 className="font-bold text-xl">Hasael Blog</h1>
            </Button>
            <Separator orientation="vertical" className="w-0.5 bg-gray-600" />
            {listMenuRouter.map((list, idx) => (
              <Link href={list.link} key={idx}>
                <Button className="" variant={"link"}>
                  {list.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-end gap-6">
            <button className="flex gap-3 ">
              <SquarePen size={18} />
              <p className="text-[15px]">Write</p>
            </button>

            <ListNotification />

            <button>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </div>
      </SubContainer>
    </>
  );
};

export default ArticleNavbar;
