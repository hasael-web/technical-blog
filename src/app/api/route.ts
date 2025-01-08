import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ mes: "testing" });
  } catch (error) {
    return NextResponse.json({ mes: "testing" });
  }
};
