import { type Shape } from "@prisma/client";
import { TRPCError } from "@trpc/server";

type FaceShapeResponse = {
  class: string;
  precision: number;
};

type ConverterResponse = {
  base64img: string;
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

export const getFaceShape = async (formData: FormData) => {
  try {
    const converterResponse = await fetch("/api/uploads/file-upload", {
      method: "POST",
      body: formData,
    });

    const { base64img } = (await converterResponse.json()) as ConverterResponse;
    return console.log(base64img);

    if (faceShapeUrl) {
      const response = await fetch(faceShapeUrl, {
        method: "POST",
        body: JSON.stringify({ img: base64img }),
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
    }
  } catch (error) {
    console.log(error);
  }
};
