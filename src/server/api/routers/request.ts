import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { Shape } from "@prisma/client";

const input = z.object({
  file: z.string().optional(),
  faceShapeData: z.object({
    shape: z.nativeEnum(Shape),
    precision: z.number(),
  }),
});

export const requestRouter = createTRPCRouter({
  create: publicProcedure.input(input).mutation(async ({ input }) => {
    return await prisma.request.create({
      data: {
        shape: input.faceShapeData.shape,
      },
    });
  }),
});
