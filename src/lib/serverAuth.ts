import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";

const serverAuth = async () => {
  const session = await getServerSession();
  if (!session?.user?.email) {
    throw new Error("Not Sign In");
  }
  const currentUser = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    select: {
      id: true,
      username: true,
      bio: true,
      email: true,
      image: true,
      _count: true,
      role: true,
      createdAt: true,
      bookmarks: true,
    },
  });
  if (!currentUser) {
    throw new Error("Not Sign In");
  }
  return currentUser;
};

export default serverAuth;
