import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const faceShapeRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    return await prisma.faceShape.findMany();
  }),
});
