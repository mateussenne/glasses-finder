import { type Shape } from "@prisma/client";

export const shapeDescriptions: Record<Shape, string> = {
  Oval: "An oval face shape is a combination of square and round. Typically, the forehead width is smaller than the cheekbone width, and the face is longer than it is wide. Dr. Shafer adds that the jawline and chin are more rounded vs. the distinguished, angular lines of a square face.",
  Round:
    "The round face shape is characterized by a wide hairline and fullness below the cheekbones. These face shapes look great with longer hair that lengthens the face. Long layers are the most flattering for this face shape, where short layers can accentuate the roundness of the face. Side swept bangs can also add length to a round face.",
  Square:
    "You have a square face shape if your forehead, cheekbones, and jawline are the same width. You also have a jawline and forehead that are wider and more pronounced, notes Dr. Shafer. While the measurements are similar to that of a round face, the total structure of your face feels more angular with minimal curves.",
  Diamond:
    "The diamond face shape is a more angular version of an oval face shape. Typically, cheekbones are high and strong, and the distance between them is slightly wider than the forehead length. The chin is also more narrow and pointed, and the hairline tends to come to a more angular point.",
  Heart:
    "This face shape is characterized by a wider forehead and narrower chin. Adding side swept bangs to this style helps disguise the width of the forehead. Keeping the style fuller around the jaw helps to add weight to the narrower chin.",
  Oblong:
    "Rectangular faces have a face length that is longer than the width of their face. Their forehead, cheekbones, and jaw also look to be the same width apart. Dr. Sigal says that a rectangular shape is most often seen in older people in cases where skin from their cheeks and jowls tends to settle into the lower half of their face. 'On occasion, younger people have really prominent buccal fat pads,'he adds. (The buccal fat pad is the natural mass of fat found in your cheek.",
};
