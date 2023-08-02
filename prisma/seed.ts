import { Shape } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const shapes = Object.keys(Shape).map((key) => {
    return key;
  });

  for (const shape of shapes) {
    await prisma.faceShape.create({
      data: {
        shape: shape as Shape,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
