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

export const getFaceShape = async (formData: FormData) => {
  const response = await fetch("http://127.0.0.1:8000", {
    method: "POST",
    body: formData,
  });

  const parsedResponse: FaceShapeResponse =
    (await response.json()) as FaceShapeResponse;
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
};
