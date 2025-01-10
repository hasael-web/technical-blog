"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { latestNews } from "@/mock";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ICategoryItemProps {
  onDetail: (id: number) => void;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ onDetail }) => {
  const [searchCtg, setSearchCtg] = useState("");

  const wordEllips = (text: string) => {
    const maxLength = 100; // Maksimal panjang teks
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return truncatedText;
  };

  return (
    <div className="flex flex-col mb-10 gap-10">
      <div className="flex gap-24 items-center justify-between">
        <h1 className="text-2xl font-bold ">
          Category : <span className="text-gray-400">{searchCtg}</span>
        </h1>
        <div className="flex items-center ">
          <Input
            placeholder="Search Category"
            onChange={(e) => setSearchCtg(e.target.value)}
          />
          <Button variant="link">
            <Search />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {latestNews.map((news, idx) => (
          <Card
            className={
              "w-full cursor-pointer active:scale-95 duration-150 ease-in-out"
            }
            key={news.title}
            onClick={() => {
              onDetail(idx);
            }}
          >
            <CardHeader>
              <Image
                src={
                  "https://akcdn.detik.net.id/visual/2020/10/03/boris-johnson-1_169.jpeg?w=400&q=90"
                }
                width={300}
                height={300}
                alt={news.title}
                className="w-full rounded-lg"
              />
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex gap-3 items-center">
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src="https://akcdn.detik.net.id/visual/2020/10/03/boris-johnson-1_169.jpeg?w=400&q=90"
                    alt="@shadcn"
                    className="object-cover"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-gray-400 text-sm">{news.source}</p>
                <p className="text-xl font-bold text-gray-400 pb-1">.</p>
                <p className="text-gray-400 text-sm">{news.time}</p>
              </div>
              <h1 className="font-bold text-xl">{news.title}</h1>
              <div className="text-ellipsis">
                <p className="">{wordEllips(news.description)}</p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-3 items-center">
                <p className="text-rose-700 text-sm">{news.category}</p>
                <p className="text-xl font-bold text-gray-400 pb-1 ">.</p>
                <p className="text-gray-400 text-sm">{news.readTime}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
