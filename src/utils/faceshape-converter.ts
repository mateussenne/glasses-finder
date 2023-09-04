import { Shape } from "@prisma/client";

const shapes: Record<string, Shape> = {
  oval: Shape.Oval,
};

export const faceShapeConverter = (shape: string) => {
  console.log("hello");
  return shapes[shape];
};
