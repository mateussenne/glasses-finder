import { Carousel } from "@mantine/carousel";
import { GlassesCard } from "../GlassesCard";
import { type Brand, type Glasses } from "@prisma/client";
import { useMediaQuery } from "@mantine/hooks";

interface CarouselProps {
  glasses: (Glasses & { brand: Brand })[];
}

export const GlassesCarousel = ({ glasses }: CarouselProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <Carousel
      slideSize={isMobile ? "100%" : "50%"}
      w={isMobile ? "350px" : "auto"}
      height={480}
      slideGap={isMobile ? "sm" : "md"}
      loop
      align={isMobile ? "start" : "center"}
    >
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
