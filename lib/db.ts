import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();
// if the current instance already has a prisma client use that else create a new client.

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
