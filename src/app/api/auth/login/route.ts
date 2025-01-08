import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: "Username and password are required" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        username: String(username),
        password: String(password),
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    return NextResponse.json({
      data: {
        isLogin: true,
        message: "user login",
      },
    });
  } catch (error) {
    return NextResponse.json({ error, message: "failed  login router" });
  }
};
