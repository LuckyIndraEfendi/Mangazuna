import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession();
    if (!session) {
      throw new Error("You need to Sign in");
    }
    const { title, image, url, rating, total_chapters, userId } =
      await req.json();
    if (!title || !image || !url || !rating || !total_chapters || !userId) {
      throw new Error("Field must have value");
    }
    const findBookmarkIfExits = await prisma.user.findFirst({
      where: {
        bookmarks: {
          some: {
            title,
            userId,
          },
        },
      },
    });
    if (findBookmarkIfExits) {
      throw new Error("Bookmark already exits");
    }
    const bookmark = await prisma.bookmark.create({
      data: {
        title,
        image,
        rating,
        total_chapters,
        url,
        user: {
          connect: { id: userId },
        },
      },
    });
    return Response.json(bookmark);
  } catch (err: any) {
    return Response.json(err.message, {
      status: 500,
    });
  }
}
