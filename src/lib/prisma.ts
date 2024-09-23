import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismGlobal = prisma;
