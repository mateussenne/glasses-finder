import { Grid, Button, Center, Title, FileButton } from "@mantine/core";
import { useForm } from "@mantine/form";
import { type Shape } from "@prisma/client";
import { useRouter } from "next/router";
import { useState, useMemo, useRef, useEffect } from "react";
import { UseRequestCreate } from "~/server/api/hooks/use-request-create";
import { getFaceShape } from "~/utils/get-faceshape";

type FaceShapeData = {
  shape: Shape;
  precision: number;
};

interface FileForm {
  file?: string;
  faceShapeData: FaceShapeData;
}

export const FileUploadSection = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [faceShapeData, setFaceShapeData] = useState<FaceShapeData>({
    shape: "Square",
    precision: 0,
  });
  const { mutate: saveRequest, data: generatedRequest } = UseRequestCreate();
  const form = useForm<FileForm>({
    initialValues: {
      file: undefined,
      faceShapeData,
    },
  });

  const activateWebcam = () => {
    setWebCamStatus(true);
  };

  const getVideo = () => {
    if (webCamStatus) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 800, height: 600 },
        })
        .then((stream) => {
          const video = videoRef.current;
          if (!video) {
            return console.log("no video signal");
          }
          video.srcObject = stream;
          video
            .play()
            .then((playing) => {
              console.log(playing);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const photo = photoRef.current;

    if (video) {
      const ctx = photo?.getContext("2d");
      ctx?.drawImage(video, 0, 0, width, height);
      setCameraPhoto(true);
      photo?.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "photosnap.jpg");
          setFile(file);
        }
      });
    }
  };

  useMemo(() => {
    async function loadFile() {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        // await fetch("/api/uploads/file-upload", {
        const response = await getFaceShape(formData);
        setFaceShapeData(response);
        if (generatedRequest) {
          localStorage.setItem("requestId", generatedRequest?.id);
          await router.push({
            pathname: "/",
            query: { requestId: generatedRequest.id },
          });
        }
      }
    }
    //  eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadFile();
  }, [file, generatedRequest, router]);

  const transformedValues = useMemo(() => {
    return {
      ...form.values,
      faceShapeData,
    };
  }, [faceShapeData, form]);

  const width = 800;
  const height = 600;
  const [webCamStatus, setWebCamStatus] = useState(false);
  const [cameraPhoto, setCameraPhoto] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    getVideo();
  }),
    [videoRef];

  return (
    <>
      <Grid grow>
        {webCamStatus ? (
          <Grid.Col span={12}>
            <canvas
              className={!cameraPhoto ? "hidden" : ""}
              width={width}
              height={height}
              ref={photoRef}
            ></canvas>
            <video
              className={cameraPhoto ? "hidden" : ""}
              ref={videoRef}
            ></video>
            <Button onClick={takePhoto}>Take photo!</Button>
          </Grid.Col>
        ) : (
          <>
            <Grid.Col span={12}>
              <Center>
                <Title className="font-sans text-7xl text-white">
                  Send your photo
                </Title>
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <form>
                <FileButton
                  accept="image/png,image/jpeg"
                  {...form.getInputProps("file")}
                >
                  {(props) => (
                    <Button
                      className="float-right rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-amber-950"
                      {...props}
                    >
                      Upload image
                    </Button>
                  )}
                </FileButton>
              </form>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                className="float-left rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-amber-950"
                onClick={activateWebcam}
              >
                Use camera
              </Button>
            </Grid.Col>
          </>
        )}
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <form onSubmit={form.onSubmit(() => saveRequest(transformedValues))}>
            <Center>
              <Button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-amber-950"
                type="submit"
              >
                Send!
              </Button>
            </Center>
          </form>
        </Grid.Col>
      </Grid>
    </>
  );
};
