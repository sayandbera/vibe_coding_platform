import { PrismaClient } from "../src/app/generated/prisma";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const prisma = globalForPrisma.prisma || new PrismaClient();
