import { Center, Container, Image, Title } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FileUploadSection } from "~/components/FileUploadSection";
import { Recomendations } from "~/components/Recomendations/Recomendations";

export default function Home() {
  const router = useRouter();
  const { requestId = null } = router.query;
  const [loadedRequest, setLoadedRequest] = useState<string | null>(null);

  useEffect(() => {
    if (window != undefined) {
      const storedRequest = localStorage.getItem("requestId");

      setLoadedRequest(
        !storedRequest && !Array.isArray(requestId) ? requestId : storedRequest
      );
    }
  }, [requestId]);

  return (
    <>
      <Head>
        <title>Glasses finder</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#70DBFF] via-[#FCFFF7] to-[#F390BE] ">
        <Container size={"xl"}>
          {loadedRequest != null ? (
            <Recomendations requestId={loadedRequest} />
          ) : (
            <>
              <FileUploadSection />
            </>
          )}
        </Container>
      </main>
    </>
  );
}
