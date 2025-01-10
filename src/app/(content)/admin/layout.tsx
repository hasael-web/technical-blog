"use client";
import session from "@/lib/session";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  session();
  return <div>{children}</div>;
};

export default RootLayout;
