/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Shape } from "@prisma/client";
import { TRPCError } from "@trpc/server";

type FaceShapeResponse = {
  class: string;
  precision: number;
};

const faceShapes: Record<string, Shape> = {
  Oval: "Oval",
  Square: "Square",
  Round: "Round",
  Heart: "Heart",
  Diamond: "Diamond",
  Oblong: "Oblong",
};

const faceShapeUrl = process.env.FACESHAPE_PREDICTION_URL;

export const getFaceShape = async (base64img: string) => {
  try {
    if (faceShapeUrl && process.env.FACESHAPE_API_KEY) {
      const response = await fetch(faceShapeUrl, {
        method: "POST",
        headers: { "x-api-Key": process.env.FACESHAPE_API_KEY },
        body: JSON.stringify({ img: base64img }),
      });

      if (!response.body) {
        console.log("no body returned");
        return;
      }

      const { body: parsedResponse } = await response.json();
      const shape = faceShapes[parsedResponse.class];

      if (!shape) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Cannot fetch the face shape",
        });
      }

      const result: { shape: Shape; precision: number } = {
        shape,
        precision: parsedResponse.precision * 100,
      };

      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
