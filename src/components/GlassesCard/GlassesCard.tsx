import { Card, Paper, Grid, Badge, Button, Image, Text } from "@mantine/core";

export const GlassesCard = () => {
  return (
    <Card radius={"lg"} withBorder>
      <Card.Section>
        <Image
          src="https://images.ray-ban.com/is/image/RayBan/805289653653__STD__shad__qt.png?impolicy=RB_Product&width=800&bgc=%23f2f2f2"
          height={250}
          alt={"Ray ban"}
        />
      </Card.Section>
      <Paper p={5}>
        <Grid>
          <Grid.Col span={8}>
            {" "}
            <Text weight={"bold"} size={"lg"}>
              Clubmaster Classic
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Badge
              color="pink"
              variant="light"
              size="md"
              className="float-right"
            >
              Ray Ban
            </Badge>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"xl"}>$60,00</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Button
              className="float-left from-[#AA1155] to-[#E9207B] no-underline transition hover:bg-gradient-to-r hover:text-white"
              variant="outline"
              radius={"xl"}
              color="pink"
              size="lg"
            >
              Try out
            </Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </Card>
  );
};
