"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ListArticle from "./__component/list-article";

export default function Home() {
  const router = useRouter();
  const sesion = localStorage.getItem("isLogin");

  useEffect(() => {
    if (!sesion) {
      router.push("/login");
    }
  }, [sesion]);

  const onLogOut = () => {
    router.push("/login");
    localStorage.setItem("isLogin", "");
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-100 ">
      <div className="bg-gray-300 mb-10  w-full">
        <div className=" py-4 w-full flex justify-between mx-auto px-10 max-w-[1200px]">
          <div className="font-bold text-2xl">Article</div>
          <div>
            <Button onClick={onLogOut}>log out</Button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-10 mx-auto w-full">
        <ListArticle />
      </div>
    </div>
  );
}
