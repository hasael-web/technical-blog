import ArticleNavbar from "@/app/__components/ArticleNavbar";
import Container from "@/app/__components/Container";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <ArticleNavbar />
      <Container>{children}</Container>
    </main>
  );
};

export default RootLayout;
