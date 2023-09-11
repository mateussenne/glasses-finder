import { Carousel } from "@mantine/carousel";
import { GlassesCard } from "../GlassesCard";

export const GlassesCarousel = () => {
  return (
    <Carousel slideSize="50%" height={450} slideGap="md" loop>
      <Carousel.Slide>
        <GlassesCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <GlassesCard />
      </Carousel.Slide>
      <Carousel.Slide>
        <GlassesCard />
      </Carousel.Slide>
    </Carousel>
  );
};
