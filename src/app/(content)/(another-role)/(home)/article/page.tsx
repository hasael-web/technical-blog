"use client";

import React from "react";
import TrandingNews from "./(components)/TrandingNews";
import LatestNews from "./(components)/LatestNews";
import CategoryItem from "./(components)/CategoryItem";
import useDetailArticle from "./__hooks/useDetailArticle";
import HeroSection from "@/app/__components/HeroSection";

const page = () => {
  const { fetchDetailArticle, loading } = useDetailArticle();

  return (
    <div>
      <HeroSection />
      <TrandingNews />
      <LatestNews />
      <CategoryItem onDetail={fetchDetailArticle} />
    </div>
  );
};

export default page;
