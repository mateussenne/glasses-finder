import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { Shape } from "@prisma/client";

const input = z.object({
  faceShapeData: z.object({
    shape: z.nativeEnum(Shape),
    precision: z.string(),
  }),
});

export const requestRouter = createTRPCRouter({
  create: publicProcedure.input(input).mutation(async ({ input }) => {
    return await prisma.request.create({
      data: {
        shape: input.faceShapeData.shape,
        precision: input.faceShapeData.precision,
      },
    });
  }),

  getOneWithGlasses: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      return await prisma.$transaction(async (tx) => {
        const request = await tx.request.findFirstOrThrow({
          where: {
            id: input,
          },
        });

        return await tx.faceShape.findFirst({
          where: {
            shape: request.shape,
          },
          include: {
            Glasses: true,
          },
        });
      });
    }),
});
