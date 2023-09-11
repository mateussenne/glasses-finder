import { type Shape } from "@prisma/client";
import { shapeDescriptions } from "~/constants/shape-descriptions";

export const shapeDescription = (shape: Shape) => {
  return shapeDescriptions[shape];
};
