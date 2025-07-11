import { prisma } from "@/prisma/prisma-client";

// GET ALL USERS
export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}

// CREATE USER
export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !name) throw Error("Données vide");

  const data = {
    email,
    name,
  };

  /*const user = await prisma.user.create({
    data: data,
  });*/

  //return Response.json({ user });
}
