import { type Shape } from "@prisma/client";

export const shapeDescriptions: Record<Shape, string> = {
  Oval: "An oval shape is a longer version of the round face. Your chin still stays rounded, but the length of your face is more than the width. Your forehead is probably the widest part of your face.",
  Round:
    "You have a round face when the vertical to horizontal ratio is equal as you look in the mirror. The majority of your features are soft and rounded. You also probably have a round chin. Your cheeks are the widest part of your face, which gives it that rounded shape.",
  Square:
    "You have a square face shape if your forehead, cheekbones, and jawline are the same width, making the face proportinal. This means that the vertical to horizontal proportion is nearly one to one. People have a square-shaped face if they have comparatively straight sides with minimal curve at the chin. They also have angled jaws.",
  Diamond:
    "Women with diamond-shaped faces will probably have high cheekbones and pointed chins. You might think that this could be a heart-shaped face as well, but not really. The main difference is that the forehead is narrower for someone with a diamond face.",
  Heart:
    "The main characteristics of a heart-shaped face are a pointed chin and a wide forehead. It doesn’t really matter whether you have a widow’s peak or not. This face shape is also called an inverted triangle, because when you think about it, your forehead is the widest part of your face and the chin is pointed.",
  Oblong:
    "Rectangular faces have a face length that is longer than the width of their face. This can also be known as an oblong face shape. The only difference between a rectangular face and an oblong face is that an oblong face is slightly less angled. It follows the same basic rectangular shape though. You have a rectangular face shape if your forehead, cheeks, and jawline are nearly the same width. The chin is only slightly curved.",
};
