import { Card, Paper, Grid, Badge, Button, Image, Text } from "@mantine/core";
import { type Brand, type Glasses } from "@prisma/client";
import Link from "next/link";

interface GlassesCardProps {
  glasses: Glasses & { brand: Brand };
}

export const GlassesCard = ({ glasses }: GlassesCardProps) => {
  return (
    <Card
      className="bg-[#FCFFF7]"
      radius={"lg"}
      withBorder
      shadow="sm"
      mih={478}
      mah={478}
    >
      <Card.Section>
        <Image src={String(glasses.image)} height={250} alt={glasses.name} />
      </Card.Section>
      <Paper className="bg-[#FCFFF7]" p={5}>
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
              {glasses.brand.name}
            </Badge>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"sm"}>{glasses.description}</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"xl"}>${glasses.price}</Text>
          </Grid.Col>
          {glasses.url && (
            <Grid.Col span={12}>
              <Link href={glasses.url} target="_blank">
                <Button
                  className="float-left from-[#AA1155] to-[#E9207B] no-underline transition hover:bg-gradient-to-r hover:text-white"
                  variant="outline"
                  radius={"lg"}
                  color="pink"
                  size="lg"
                  w={"100%"}
                >
                  Buy now
                </Button>
              </Link>
            </Grid.Col>
          )}
        </Grid>
      </Paper>
    </Card>
  );
};
