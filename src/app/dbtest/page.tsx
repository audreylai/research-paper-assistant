import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page() {
  const allUsers = await prisma.user.findMany();
  return (
    <ul>
      {allUsers.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
}
