import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { UseRequestGetOneWithGlasses } from "~/server/api/hooks/use-request-get-one-with-glasses";
import { GlassesCarousel } from "../GlassesCarousel/GlassesCarousel";
import { shapeDescription } from "~/utils/shape-description";
import { useRouter } from "next/router";

interface recomendedGlasesProps {
  requestId: string;
}

export const Recomendations = ({ requestId }: recomendedGlasesProps) => {
  const { data: requestData } = UseRequestGetOneWithGlasses(requestId);
  const router = useRouter();
  const clearRequest = () => {
    localStorage.removeItem("requestId");
    router.reload();
  };
  return (
    <Grid>
      <Grid.Col span={12}>
        <Card
          className="bg-[#FCFFF7]"
          radius={"lg"}
          p={50}
          w={800}
          withBorder
          shadow="xl"
        >
          <Card.Section withBorder p={50}>
            <Title
              className="text-center text-5xl"
              style={{ color: "#141301" }}
              weight={"bolder"}
            >
              Your face format is {requestData?.faceShape?.shape}!
            </Title>
            <Text
              size={"md"}
              style={{ color: "#E9207B" }}
              weight={"bolder"}
              className="text-center"
            >
              Precision: {requestData?.request.precision}%
            </Text>
          </Card.Section>
          {requestData?.faceShape?.shape && (
            <Paper className="bg-[#FCFFF7]" p={15}>
              <Grid>
                <Grid.Col span={2}>
                  <Button
                    className="bg-[#AA1155] text-white no-underline transition hover:bg-gradient-to-r hover:from-[#AA1155] hover:to-[#E9207B]  hover:text-white"
                    variant="outline"
                    radius={"xl"}
                    color="pink"
                    size="sm"
                    w={"100%"}
                    mt={5}
                    onClick={clearRequest}
                  >
                    Take photo!
                  </Button>
                </Grid.Col>
                <Grid.Col span={10}>
                  {" "}
                  <Text style={{ color: "#141301" }}>
                    {shapeDescription(requestData?.faceShape?.shape)}
                  </Text>
                </Grid.Col>
              </Grid>
            </Paper>
          )}
          {requestData?.faceShape?.Glasses && (
            <Paper className="bg-[#FCFFF7]" p={15}>
              {" "}
              <Text weight={"bold"}>
                Here goes a list of glasses that might look good on you:
              </Text>
              <Container size={"lg"} mt={20}>
                <GlassesCarousel glasses={requestData?.faceShape.Glasses} />
              </Container>
            </Paper>
          )}
        </Card>
      </Grid.Col>
    </Grid>
  );
};
