"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import JhonWickImage from "@/assets/jhon-wick.jpg";

const TrandingNews = () => {
  const wordEllips = (text: string) => {
    const maxLength = 200; // Maksimal panjang teks
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return truncatedText;
  };
  return (
    <div className="flex gap-5 mt-16 cursor-pointer" onClick={() => {}}>
      <div className="flex-1 h-[300px] w-[100px] rounded-lg ">
        <Image
          src={JhonWickImage}
          alt="jhon-wick"
          width={400}
          height={400}
          className="w-full object-cover rounded-lg h-full"
        />
      </div>
      <div className="flex flex-col gap-4  justify-between  flex-1 h-[300px] ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Netflix</p>
            <p className="font-bold text-lg">.</p>
            <p>12 minutes ago</p>
          </div>
          <div>
            <h1 className="font-bold text-5xl capitalize">
              Where to whatch 'jhon wick: chapter 3'
            </h1>
          </div>
          <div>
            <p className=" text-gray-600">
              {wordEllips(
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos impedit sint doloremque ea quae, beatae tempore laborum, totam voluptas voluptatibus, quis minima! Enim quas doloribus praesentium sed autem illum"
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-2 h-full items-end">
          <p className="text-rose-700 ">Movies</p>
          <p>.</p>
          <p>4 min Read</p>
        </div>
      </div>
    </div>
  );
};

export default TrandingNews;
