import {
  Button,
  Card,
  Center,
  Container,
  Grid,
  Image,
  LoadingOverlay,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { UseRequestGetOneWithGlasses } from "~/server/api/hooks/use-request-get-one-with-glasses";
import { GlassesCarousel } from "../GlassesCarousel/GlassesCarousel";
import { shapeDescription } from "~/utils/shape-description";
import Link from "next/link";

interface recomendedGlasesProps {
  requestId: string;
}

export const Recomendations = ({ requestId }: recomendedGlasesProps) => {
  const { data: requestData, isFetching } =
    UseRequestGetOneWithGlasses(requestId);
  const faceShape = requestData?.faceShape?.shape;
  const shapeImgPath = `/images/${faceShape}.png`;
  const clearRequest = () => {
    localStorage.removeItem("requestId");
  };
  return (
    <Grid>
      <LoadingOverlay
        visible={isFetching}
        loaderProps={{ color: "#E9207B", size: "xl" }}
      />
      <Grid.Col span={12}>
        <Center>
          <Card
            className="bg-[#FCFFF7]"
            radius={"lg"}
            p={40}
            w="80%"
            withBorder
            shadow="xl"
          >
            <Card.Section withBorder p={20}>
              <Title
                className="text-center text-5xl"
                style={{ color: "#141301" }}
                weight={"bolder"}
              >
                Your face format is {faceShape}!
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
            {faceShape && (
              <Paper className="bg-[#FCFFF7]" p={15}>
                <Grid>
                  <Grid.Col span={2}>
                    <Image
                      src={shapeImgPath}
                      alt={faceShape}
                      height={150}
                      width={100}
                    />
                  </Grid.Col>
                  <Grid.Col span={10}>
                    {" "}
                    <Text style={{ color: "#141301" }}>
                      {shapeDescription(faceShape)}
                    </Text>
                    <Link href={"/"}>
                      <Button
                        className="no-underline transition hover:bg-gradient-to-r hover:from-[#AA1155] hover:to-[#E9207B]  hover:text-white"
                        variant="outline"
                        radius={"xl"}
                        color="pink"
                        size="sm"
                        mt={5}
                        onClick={clearRequest}
                      >
                        Try again
                      </Button>
                    </Link>
                  </Grid.Col>
                </Grid>
              </Paper>
            )}
            {requestData?.faceShape?.glasses && (
              <Paper className="bg-[#FCFFF7]" p={15}>
                {" "}
                <Text
                  weight={"bold"}
                  size={"lg"}
                  className="text-center text-[#E9207B]"
                >
                  Glasses that might look good on you:
                </Text>
                <Container size={"lg"} mt={20}>
                  <GlassesCarousel glasses={requestData?.faceShape.glasses} />
                </Container>
              </Paper>
            )}
          </Card>
        </Center>
      </Grid.Col>
    </Grid>
  );
};
