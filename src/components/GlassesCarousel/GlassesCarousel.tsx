import { Carousel } from "@mantine/carousel";
import { GlassesCard } from "../GlassesCard";
import { type Brand, type Glasses } from "@prisma/client";

interface CarouselProps {
  glasses: (Glasses & { brand: Brand })[];
}

export const GlassesCarousel = ({ glasses }: CarouselProps) => {
  return (
    <Carousel slideSize="50%" height={480} slideGap="md" loop>
      {glasses.map((g) => {
        return (
          <Carousel.Slide key={g.id}>
            <GlassesCard glasses={g} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};
