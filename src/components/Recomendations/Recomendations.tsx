import { Card, Grid, Paper, Text, Title } from "@mantine/core";
import { UseRequestGetOneWithGlasses } from "~/server/api/hooks/use-request-get-one-with-glasses";

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
          </Paper>
          {/* <p>{JSON.stringify(request?.Glasses)}</p> */}
        </Card>
      </Grid.Col>
    </Grid>
  );
};