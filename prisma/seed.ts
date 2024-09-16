import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

function createRandomUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };
}

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

  const users = faker.helpers.multiple(createRandomUser, { count: 10 });

  users.map(async ({ name, email }) => {
    await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        name: name,
      },
    });
  });
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
