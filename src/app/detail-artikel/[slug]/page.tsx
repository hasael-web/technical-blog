"use client";
import { Button } from "@/components/ui/button";
import { dummyArticles } from "@/mock";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const DetailArtikel = () => {
  // dummyArticlescosnt
  const params = useParams() as { slug: string };
  const dummyArticlesDetail = dummyArticles.find(
    (item) => String(item.id) === params.slug
  );
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
  const onBack = () => {
    router.push("/");
  };

  return (
    <div className="">
      <div className="bg-gray-300 mb-10  w-full">
        <div className=" py-4 w-full flex justify-between mx-auto px-10 max-w-[1200px]">
          <div className="font-bold text-2xl">Article</div>
          <div>
            <Button onClick={onLogOut}>log out</Button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-10 mx-auto w-full">
        <div className="mb-7 ">
          <Button onClick={onBack} variant="link" className="text-2xl">
            {"<"} Back
          </Button>
        </div>
        <p className="text-2xl font-bold">{dummyArticlesDetail?.title}</p>
        <p className="text-base font-bold">
          {dummyArticlesDetail?.publishedAt}
        </p>
        <div className="mt-4">{dummyArticlesDetail?.content}</div>
      </div>
    </div>
  );
};

export default DetailArtikel;
