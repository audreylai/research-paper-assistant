import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const lucas = await prisma.user.upsert({
    where: { email: "lucasma8795@gmail.com" },
    update: {},
    create: {
      email: "lucasma8795@gmail.com",
      name: "Lucas Ma",
    },
  });

  const audrey = await prisma.user.upsert({
    where: { email: "audreylai@gmail.com" },
    update: {},
    create: {
      email: "audreylai@gmail.com",
      name: "Audrey Lai",
    },
  });

  console.log({ lucas, audrey });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
