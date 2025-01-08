import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: "Username and password are required" });
  }

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (findUser) {
      return NextResponse.json({ message: "user already exists" });
    }
    await prisma.user.create({
      data: { username, password },
    });

    return NextResponse.json({
      message: "User registered successfully",
      user: { username },
    });
  } catch (error) {
    NextResponse.json({ message: "Internal server error" });
  }
};
