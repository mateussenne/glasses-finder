import { Card, Paper, Grid, Badge, Button, Image, Text } from "@mantine/core";
import { type Brand, type Glasses } from "@prisma/client";

interface GlassesCardProps {
  glasses: Glasses & { Brand: Brand };
}

export const GlassesCard = ({ glasses }: GlassesCardProps) => {
  return (
    <Card radius={"lg"} withBorder shadow="sm">
      <Card.Section>
        <Image src={String(glasses.image)} height={250} alt={glasses.name} />
      </Card.Section>
      <Paper p={5}>
        <Grid>
          <Grid.Col span={10}>
            {" "}
            <Text weight={"bold"} size={"lg"}>
              {glasses.name}
            </Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Badge
              color="pink"
              variant="light"
              size="md"
              className="float-right"
            >
              {glasses.Brand.name}
            </Badge>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"xl"}>${glasses.price}</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Button
              className="float-left from-[#AA1155] to-[#E9207B] no-underline transition hover:bg-gradient-to-r hover:text-white"
              variant="outline"
              radius={"lg"}
              color="pink"
              size="lg"
              w={"100%"}
            >
              Try out
            </Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </Card>
  );
};
