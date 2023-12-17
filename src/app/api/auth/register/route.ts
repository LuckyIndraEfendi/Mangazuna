import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, email, password } = await req.json();
    const findUserIfExits = await prisma?.user.findFirst({
      where: {
        email,
      },
    });
    if (findUserIfExits) {
      throw new Error("User Already Exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma?.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (err: any) {
    return NextResponse.json(
      {
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}
