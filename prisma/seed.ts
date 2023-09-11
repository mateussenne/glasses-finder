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

  const rayban = await prisma.brand.create({
    data: {
      name: "Ray-Ban",
    },
  });

  const heart = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Heart,
    },
  });

  const oval = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Oval,
    },
  });

  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7895653167483__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Justin Classic",
      description: "One of the best modern classics ever",
      price: 870,
      Brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: {
          id: heart.id,
        },
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7895653138735__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Erika Classic",
      description: "Cool :) ",
      price: 930,
      Brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: {
          id: heart.id,
        },
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/805289653653__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Clubmaster Classic",
      description: "New glasses, old style",
      price: 820,
      Brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: {
          id: heart.id,
        },
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/8056597328111__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Aviator total black",
      description: "There is nothing like it",
      price: 0,
      Brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: {
          id: oval.id,
        },
      },
    },
  });

  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7891318420146__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Aviator Classic",
      description: "THE classic of all time",
      price: 820,
      Brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: {
          id: oval.id,
        },
      },
    },
  });
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
