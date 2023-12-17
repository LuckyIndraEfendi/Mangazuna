import { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const session = await getServerSession();
    if (!session) {
      return Response.json({
        message: session,
      });
    }
    const { id } = params;
    const bookmark = await prisma.bookmark.delete({
      where: {
        id,
      },
    });
    if (!bookmark) {
      throw new Error("Bookmark Cannot Be Deleted");
    }
    return Response.json({
      message: `Successfully deleted bookmark with id ${bookmark?.id}`,
    });
  } catch (err: any) {
    return Response.json(err.message, { status: 500 });
  }
}
