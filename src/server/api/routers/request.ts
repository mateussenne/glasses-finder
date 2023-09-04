import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { Shape } from "@prisma/client";

const input = z.object({
  file: z.string(),
  faceShapeResponse: z.object({
    shape: z.nativeEnum(Shape),
    precision: z.number(),
  }),
});

export const requestRouter = createTRPCRouter({
  create: publicProcedure.input(input).mutation(async ({ input }) => {
    return await prisma.$transaction(async (tx) => {
      const faceShape = await tx.faceShape.findFirstOrThrow({
        where: {
          shape: {
            equals: Shape.Square,
          },
        },
      });
      await tx.request.create({
        data: {
          faceShape: {
            connect: {
              id: faceShape.id,
            },
          },
        },
      });
    });
  }),
});
