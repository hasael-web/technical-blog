"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { latestNews } from "@/mock";
import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestNews = () => {
  const wordEllips = (text: string) => {
    const maxLength = 100; // Maksimal panjang teks
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return truncatedText;
  };

  return (
    <div className="my-10  w-full">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <Button variant="link">
          <span className="text-sm text-rose-600">See All</span>
          <MoveRight className="text-rose-600" />
        </Button>
      </div>
      <Carousel className="w-full ">
        <CarouselContent className="w-full">
          {latestNews.map((news, index) => (
            <CarouselItem key={index} className="basis-2/6">
              <div className="p-1">
                <Card
                  className={
                    "w-full cursor-pointer active:scale-95 duration-150 ease-in-out"
                  }
                  onClick={() => {}}
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default LatestNews;
