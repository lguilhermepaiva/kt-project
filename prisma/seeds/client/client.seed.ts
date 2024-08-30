import { PrismaClient } from '@prisma/client';
import * as clients from './client.json';

export async function seedClient(prisma: PrismaClient) {
  for (const client of clients) {
    await prisma.client.create({
      data: client,
    });
  }
}
