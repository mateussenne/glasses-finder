import { Card, Container, Grid, Paper, Text, Title } from "@mantine/core";
import { UseRequestGetOneWithGlasses } from "~/server/api/hooks/use-request-get-one-with-glasses";
import { GlassesCarousel } from "../GlassesCarousel/GlassesCarousel";

interface recomendedGlasesProps {
  requestId: string;
}

export const Recomendations = ({ requestId }: recomendedGlasesProps) => {
  const { data: request } = UseRequestGetOneWithGlasses(requestId);
  return (
    <Grid>
      <Grid.Col span={12}>
        <Card radius={"lg"} p={50} w={800} withBorder shadow="xl">
          <Card.Section withBorder p={50}>
            <Title
              className="text-center text-5xl"
              style={{ color: "#141301" }}
              weight={"bolder"}
            >
              Your face is {request?.shape}!
            </Title>
            <Text
              size={"md"}
              style={{ color: "#E9207B" }}
              weight={"bolder"}
              className="text-center"
            >
              Precision: 90%
            </Text>
          </Card.Section>
          <Paper p={15}>
            <Text style={{ color: "#141301" }}>
              Oblong faces lorem ipsum bla bla bla bla bla Oblong faces lorem
              ipsum bla bla bla bla bla Oblong faces lorem ipsum bla bla bla bla
              bla Oblong faces lorem ipsum bla bla bla bla bla Oblong faces
              lorem ipsum bla bla bla
            </Text>
          </Paper>
          <Paper p={15}>
            {" "}
            <Text weight={"bold"}>
              Here goes a list of glasses that might look good on you:
            </Text>
            <Container size={"lg"} mt={20}>
              <GlassesCarousel />
            </Container>
          </Paper>
        </Card>
      </Grid.Col>
    </Grid>
  );
};
