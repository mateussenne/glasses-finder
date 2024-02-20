import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";
import { getFaceShape } from "~/utils/get-faceshape";

const input = z.object({
  base64Image: z.string(),
});

export const requestRouter = createTRPCRouter({
  create: publicProcedure.input(input).mutation(async ({ input }) => {
    const faceShapeData = await getFaceShape(input.base64Image);
    if (!faceShapeData) {
      return;
    }

    return await prisma.request.create({
      data: {
        shape: faceShapeData.shape,
        precision: faceShapeData.precision,
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

        const faceShape = await tx.faceShape.findFirst({
          where: {
            shape: request.shape,
          },
          include: {
            glasses: {
              include: {
                brand: true,
              },
            },
          },
        });
        return {
          request,
          faceShape,
        };
      });
    }),
});
