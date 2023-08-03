import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";

const input = z.object({
  file: z.string(),
});

export const requestRouter = createTRPCRouter({
  create: publicProcedure.input(input).mutation(async ({ input }) => {
    const brand = await prisma.brand.findMany();
    return "hi";
  }),
});
