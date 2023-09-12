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
      name: "Ray Ban",
    },
  });
  const oakley = await prisma.brand.create({
    data: {
      name: "Oakley",
    },
  });
  const tommy = await prisma.brand.create({
    data: {
      name: "Tommy",
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

  const round = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Round,
    },
  });
  const oblong = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Oblong,
    },
  });
  const square = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Square,
    },
  });
  const diamond = await prisma.faceShape.findFirstOrThrow({
    where: {
      shape: Shape.Diamond,
    },
  });

  // Rayban
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7895653167483__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Justin Classic",
      description:
        "Ray-Ban Justin sunglasses may just be one of the coolest looks in the Ray-Ban collection.",
      url: "https://www.ray-ban.com/usa/sunglasses/RB4165%20UNISEX%20justin%20classic-black/8053672508147",
      price: 178,
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [
          { id: oval.id },
          { id: square.id },
          { id: heart.id },
          { id: oblong.id },
        ],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7895653138735__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Erika Classic",
      description:
        "Ray-Ban Erika RB4171 sunglasses are the perfect accessory to complete any look. ",
      price: 158,
      url: "https://www.ray-ban.com/usa/sunglasses/RB4171%20UNISEX%20erika%20classic-havana/805289742470",
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [{ id: round.id }, { id: square.id }, { id: diamond.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/805289439899__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Round Metal",
      description: "The Ray-Ban ® Round Metal sunglasses are totally retro. ",
      price: 171,
      url: "https://www.ray-ban.com/usa/sunglasses/RB3447%20UNISEX%20round%20metal-gold/805289439899",
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [{ id: square.id }, { id: oblong.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/805289653653__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Clubmaster Classic",
      description:
        "Ray-Ban RB3016 Clubmaster Classic Sunglasses are a timeless classic.",
      price: 171,
      url: "https://www.ray-ban.com/usa/sunglasses/RB3016clubmaster%20classic-black%20on%20gold/805289304449",
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [{ id: heart.id }, { id: diamond.id }, { id: oval.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/8056597919166__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Aviator reverse",
      description:
        "Four timeless Ray-Ban styles are re-envisioned with a twist that nobody expected.",
      url: "https://www.ray-ban.com/usa/sunglasses/RBR0101Saviator%20reverse-rose%20gold/8056597919166",
      price: 193,
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [
          { id: oval.id },
          { id: heart.id },
          { id: square.id },
          { id: oblong.id },
        ],
      },
    },
  });

  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/7891318420146__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Aviator Classic",
      description:
        "Currently one of the most iconic sunglass models in the world.",
      url: "https://www.ray-ban.com/usa/sunglasses/RB3025%20UNISEX%20aviator%20classic-gold/805289602057",
      price: 171,
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }],
      },
    },
  });

  await prisma.glasses.create({
    data: {
      image:
        "https://images.ray-ban.com/is/image/RayBan/8056597918831__STD__shad__qt.png?impolicy=RB_Product&width=2048&bgc=%23f2f2f2",
      name: "Wayfarer reverse",
      description:
        "Four timeless Ray-Ban styles are re-envisioned with a twist that nobody expecte.",
      url: "https://www.ray-ban.com/usa/sunglasses/RBR0502Swayfarer%20reverse-black/8056597918831",
      price: 193,
      brand: {
        connect: {
          id: rayban.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }, { id: round.id }, { id: heart.id }],
      },
    },
  });

  // Oakley
  await prisma.glasses.create({
    data: {
      image:
        "https://assets2.oakley.com/cdn-record-files-pi/74f371f0-9f2b-4c3f-b3ac-b01a009b64ba/48527b21-cda1-4b87-9f47-b01a00afd518/0OO9284__928401__P21__shad__qt.png?impolicy=OO_ratio&width=1000",
      name: "Frogskins Range",
      description:
        "You’ve never seen Frogskins™ like this—or with this kind of range. ",
      url: "https://www.oakley.com/en-eu/product/W0OO9284?variant=888392609977",
      price: 193,
      brand: {
        connect: {
          id: oakley.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }, { id: heart.id }, { id: round.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://assets2.oakley.com/cdn-record-files-pi/dfa3aa2b-d670-48af-8589-afac017d4768/9cba0b75-a9aa-44e4-9037-b00401775a0b/0OO9102__9102Y1__P21__shad__qt.png?impolicy=OO_ratio&width=1000",
      name: "Holbrook Latitude",
      description: "The Oakley® Latitude Collection is born of the outdoors. ",
      url: "https://www.oakley.com/en-eu/product/W0OO9102LT?variant=888392610669",
      price: 155,
      brand: {
        connect: {
          id: oakley.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }, { id: heart.id }, { id: round.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://assets2.oakley.com/cdn-record-files-pi/791493c1-499c-4526-8bd1-adcd00a49101/7c301f4b-5019-4405-aef6-adcd00bd3ed6/0OO9465__946505__P21__shad__qt.png?impolicy=OO_ratio&width=1000",
      name: "Sutro Lite Sweep",
      description:
        "First made popular by Eyeshade with the Oakley’s popular Sutro frame design.",
      url: "https://www.oakley.com/en-eu/product/W0OO9265?variant=888392320551",
      price: 185,
      brand: {
        connect: {
          id: oakley.id,
        },
      },
      faceShapes: {
        connect: [{ id: square.id }, { id: oblong.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://assets2.oakley.com/cdn-record-files-pi/eb3124fb-aa07-4e8d-a6f6-a77b008264b1/60443d7c-9302-44c8-b0e4-ae5301129e2d/0OO9265__926532__P21__shad__qt.png?impolicy=OO_ratio&width=1000",
      name: "Latch",
      description:
        "A fresh path from the trailblazers of style, this design inspired by influential athletes.",
      url: "https://www.oakley.com/en-eu/product/W0OO9265?variant=888392320551",
      price: 215,
      brand: {
        connect: {
          id: oakley.id,
        },
      },
      faceShapes: {
        connect: [{ id: round.id }, { id: square.id }, { id: oblong.id }],
      },
    },
  });

  // Tommy
  await prisma.glasses.create({
    data: {
      image:
        "https://tommy-europe.scene7.com/is/image/TommyEurope/TH1975S510_FZS_main?$b2c_updp_recommendations_767$",
      name: "Polarized Rectangular",
      description:
        "These sporty sunglasses have a rectangular shape with polarised lenses for enhanced comfort.",
      url: "https://pt.tommy.com/polarised-rectangular-sunglasses-th1975s510fzs",
      price: 174,
      brand: {
        connect: {
          id: tommy.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }, { id: heart.id }, { id: round.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://tommy-europe.scene7.com/is/image/TommyEurope/TH1978S590_0M9_main?$b2c_updp_m_mainImage_1920$",
      name: "Sporty Polarized Rectangular",
      description:
        "Add a sporty edge to your look in these angular, wraparound sunglasses.",
      url: "https://pt.tommy.com/polarised-rectangular-sunglasses-th1978s5900m9",
      price: 164,
      brand: {
        connect: {
          id: tommy.id,
        },
      },
      faceShapes: {
        connect: [{ id: oval.id }, { id: round.id }, { id: heart.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://tommy-europe.scene7.com/is/image/TommyEurope/TJ0094S650_VK6_main?$b2c_updp_m_mainImage_1920$",
      name: "Pink Rectangular",
      description:
        "These statement sunglasses are crafted with stylish angular frames.",
      url: "https://pt.tommy.com/pink-rectangular-sunglasses-tj0094s650vk6",
      price: 134,
      brand: {
        connect: {
          id: tommy.id,
        },
      },
      faceShapes: {
        connect: [{ id: round.id }, { id: square.id }, { id: oblong.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://tommy-europe.scene7.com/is/image/TommyEurope/TJ0092S550_KB7_main?$b2c_updp_m_mainImage_1920$",
      name: "Transparent Rectangular",
      description: "Go bold on brighter days with these futuristic sunglasses.",
      url: "https://pt.tommy.com/transparent-rectangular-sunglasses-tj0092s550kb7",
      price: 169,
      brand: {
        connect: {
          id: tommy.id,
        },
      },
      faceShapes: {
        connect: [{ id: square.id }, { id: oblong.id }],
      },
    },
  });
  await prisma.glasses.create({
    data: {
      image:
        "https://tommy-europe.scene7.com/is/image/TommyEurope/TH1970S490_086_main?$b2c_updp_m_mainImage_1920$",
      name: "Rivet Detail Round",
      description:
        "Opt for cool and classic with these sunglasses, featuring subtly geometric rounded lenses.",
      url: "https://pt.tommy.com/rivet-detail-round-sunglasses-th1970s490086",
      price: 169,
      brand: {
        connect: {
          id: tommy.id,
        },
      },
      faceShapes: {
        connect: [{ id: diamond.id }, { id: round.id }, { id: square.id }],
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
