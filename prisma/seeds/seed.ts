import { PrismaClient } from '@prisma/client';
import { seedClient } from './client/client.seed';
import { seedItem } from './item/item.seed';

const prisma = new PrismaClient();

console.log(typeof seedClient);
console.log(typeof seedItem);

async function main() {
  await seedClient(prisma);
  await seedItem(prisma);
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
